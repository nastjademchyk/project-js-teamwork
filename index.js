import{a,i as u,A as k,b as M,S as B}from"./assets/vendor-_9fXnX53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const j=document.querySelector(".js-open-menu"),w=document.querySelector("#close-modal"),y=document.querySelector(".js-modal"),L=document.querySelector(".modal-nav-item");function C(){y.classList.remove("is-hidden"),w.addEventListener("click",m),L.addEventListener("click",m)}function m(){y.classList.add("is-hidden"),w.removeEventListener("click",m),L.removeEventListener("click",m)}j.addEventListener("click",C);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-image");e.addEventListener("mouseover",()=>{a({targets:".about-image",rotate:"1turn",scale:[1,1.1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("mouseout",()=>{a({targets:".about-image",rotate:"0turn",scale:[1.1,1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("focus",()=>{a({targets:".about-image",rotate:"1turn",scale:[1,1.1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("blur",()=>{a({targets:".about-image",rotate:"0turn",scale:[1.1,1],duration:1e3,easing:"easeInOutQuad"})})});const c=document.querySelectorAll(".project-item"),p=document.querySelector(".btn-load");let l=0;const E=()=>{for(let t=l;t<l+3;t++)c[t]&&(c[t].classList.remove("is-hidden"),p.classList.remove("is-hidden"));const e=c[0].getBoundingClientRect().height;window.scrollBy({top:e*.5,left:0,behavior:"smooth"}),l+=3,l>=c.length&&(p.classList.add("is-hidden"),u.info({message:"Sorry, this is the last project",position:"topRight"}))};p.addEventListener("click",E);E();new k(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-header",panelClass:"ac-panel",duration:4e3,openOnInit:[0],beforeOpen:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const I="https://portfolio-js.b.goit.study/api/reviews",S=document.querySelector(".reviews-list"),v=document.querySelector(".swiper-next-btn"),f=document.querySelector(".swiper-prev-btn"),A=document.querySelector(".reviews");let d=!1;async function x(){try{const t=(await M.get(I)).data;t.length===0?d=!1:(d=!0,P(t),T())}catch(e){d=!1,console.error(e)}}function P(e){const t=e.map(({author:n,avatar_url:s,review:o})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${o}</p>
            <div class="author-info">
              <img class="author-avatar" src="${s}" alt="Author avatar" />
              <p class="author-name">${n}</p>
            </div>
          </div>
        </li>
      `).join("");S.innerHTML=t}function T(){new B(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){v.disabled=!0},reachBeginning(){f.disabled=!0},fromEdge(){v.disabled=!1,f.disabled=!1}}})}const q=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!d&&(N(),q.unobserve(t.target))})});q.observe(A);function N(){u.error({title:"Error",message:"Reviews not found.",position:"topRight"}),S.innerHTML=`
    <li class="swiper-slide review-item">
      <div class="review-item-container">
        <p class="review-text">Not Found</p>
      </div>
    </li>
  `,f.disabled=!0,v.disabled=!0}x();function R({title:e,message:t}){return`
  <div class="backdrop">
    <div class="modal">
        <button class="modal-close-btn" type="button ">
        <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons-svg.svg#icon-icon-close-menu"></use>
        </svg>
        </button>
        <div class="modal-wrapper">
            <h3 class="modal-h3">${e}</h3>
            <p class="modal-text">${t}</p>
        </div>
    </div>
  </div>
  `}const g={form:document.querySelector(".work-together-right"),email:document.querySelector(".form-input-email"),comments:document.querySelector(".form-input-comments"),modalContainer:document.querySelector(".modal-container")},$="https://portfolio-js.b.goit.study/api/requests",b={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},H=async e=>{b.body=JSON.stringify(e);try{const t=await fetch(`${$}`,b);if(!t.ok)throw new Error(t.status);return t.json()}catch(t){throw console.log(t),t}},F=async e=>{e.preventDefault();const{email:t,comments:n}=e.target.elements,s={email:t.value,comment:n.value};if(s.email.trim()===""||s.comment.trim()===""){u.error({message:"Please fill in all fields",position:"center",messageColor:"#E74A3B",closeOnEscape:!0});return}try{const{title:o,message:r}=await H(s);e.target.reset();const i=R({title:o,message:r});g.modalContainer.insertAdjacentHTML("beforeend",i),document.querySelector(".modal-close-btn").addEventListener("click",h),g.modalContainer.querySelector(".backdrop").addEventListener("click",h),document.addEventListener("keydown",O)}catch{u.error({message:"The server is not responding, try again later",position:"center",messageColor:"#E74A3B",closeOnEscape:!0})}};function h(){const e=document.querySelector(".backdrop");e==null||e.remove(),document.removeEventListener("keydown",O)}function O(e){e.key==="Escape"&&h()}g.form.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
