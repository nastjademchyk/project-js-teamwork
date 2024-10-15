import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewsUrl = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');
const nextBtn = document.querySelector('.swiper-next-btn');
const prevBtn = document.querySelector('.swiper-prev-btn');
const reviewsSection = document.querySelector('.reviews');

let reviewsFetched = false;
let reviewsExist = false;

async function fetchReviews() {
  try {
    const response = await axios.get(reviewsUrl);
    const data = response.data;

    // Uncomment to test error showing when reviews are empty.
    //  data.length = 0;

    if (data.length === 0) {
      // No reviews found
      reviewsExist = false;
      reviewsFetched = false;
    } else {
      // Reviews exist
      reviewsExist = true;
      reviewsFetched = true;
      renderReviews(data);
      initializeSwiper();
    }

    observeReviewsSection();
  } catch (error) {
    console.error(error);
    reviewsFetched = false;
    observeReviewsSection();
  }
}

function renderReviews(reviews) {
  const reviewsMarkup = reviews
    .map(
      ({ author, avatar_url, review }) => `
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${review}</p>
            <div class="author-info">
              <img class="author-avatar" src="${avatar_url}" alt="Author avatar" loading="lazy"/>
              <p class="author-name">${author}</p>
            </div>
          </div>
        </li>
      `
    )
    .join('');

  reviewsList.innerHTML = reviewsMarkup;
}

// Initialize Swiper
function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-prev-btn',
      prevEl: '.swiper-next-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    on: {
      reachEnd() {
        nextBtn.disabled = true;
      },
      reachBeginning() {
        prevBtn.disabled = true;
      },
      fromEdge() {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      },
    },
  });
}

// Observer logic
function observeReviewsSection() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !reviewsFetched) {
        showErrorAndNotFound();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(reviewsSection);
}

function showErrorAndNotFound() {
  if (!reviewsExist) {
    iziToast.error({
      title: 'Error',
      message: 'Reviews not found.',
      position: 'topRight',
    });

    reviewsList.innerHTML = `
      <li class="swiper-slide review-item">
        <div class="review-item-container">
          <p class="review-text">Not Found</p>
        </div>
      </li>
    `;

    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
}

// Initial fetch of reviews
fetchReviews();
