import{i as v,A as b,a as y,S}from"./assets/vendor-Cv84vpVH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const s=document.querySelectorAll(".project-item"),d=document.querySelector(".btn-load");let n=0;const w=()=>{for(let r=n;r<n+3;r++)s[r]&&(s[r].classList.remove("is-hidden"),d.classList.remove("is-hidden"));const e=s[0].getBoundingClientRect().height;window.scrollBy({top:e*.5,left:0,behavior:"smooth"}),n+=3,n>=s.length&&(d.classList.add("is-hidden"),v.info({message:"Sorry, this is the last project",position:"topRight"}))};d.addEventListener("click",w);w();new b(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-header",panelClass:"ac-panel",duration:4e3,openOnInit:[0],beforeOpen:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const L="https://portfolio-js.b.goit.study/api/reviews",h=document.querySelector(".reviews-list"),u=document.querySelector(".swiper-next-btn"),p=document.querySelector(".swiper-prev-btn"),E=document.querySelector(".reviews");let c=!1;async function q(){try{const r=(await y.get(L)).data;r.length===0?c=!1:(c=!0,x(r),B())}catch(e){c=!1,console.error(e)}}function x(e){const r=e.map(({author:a,avatar_url:o,review:t})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${t}</p>
            <div class="author-info">
              <img class="author-avatar" src="${o}" alt="Author avatar" />
              <p class="author-name">${a}</p>
            </div>
          </div>
        </li>
      `).join("");h.innerHTML=r}function B(){new S(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){u.disabled=!0},reachBeginning(){p.disabled=!0},fromEdge(){u.disabled=!1,p.disabled=!1}}})}const g=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&!c&&(O(),g.unobserve(r.target))})});g.observe(E);function O(){v.error({title:"Error",message:"Reviews not found.",position:"topRight"}),h.innerHTML=`
    <li class="swiper-slide review-item">
      <div class="review-item-container">
        <p class="review-text">Not Found</p>
      </div>
    </li>
  `,p.disabled=!0,u.disabled=!0}q();const f=document.querySelector(".backdrop"),A=document.querySelector(".modal-close-btn");function m(){f.style.display="none"}A.addEventListener("click",m);document.addEventListener("keydown",function(e){e.key==="Escape"&&m()});f.addEventListener("click",function(e){e.target===f&&m()});
//# sourceMappingURL=index.js.map
