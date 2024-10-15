import{a,i as u,A as B,b as M,S as j}from"./assets/vendor-_9fXnX53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const I=document.querySelector(".js-open-menu"),L=document.querySelector("#close-modal"),E=document.querySelector(".js-modal"),S=document.querySelector(".modal-nav-item");function C(){E.classList.remove("is-hidden"),L.addEventListener("click",m),S.addEventListener("click",m)}function m(){E.classList.add("is-hidden"),L.removeEventListener("click",m),S.removeEventListener("click",m)}I.addEventListener("click",C);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".about-image");e.addEventListener("mouseover",()=>{a({targets:".about-image",rotate:"1turn",scale:[1,1.1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("mouseout",()=>{a({targets:".about-image",rotate:"0turn",scale:[1.1,1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("focus",()=>{a({targets:".about-image",rotate:"1turn",scale:[1,1.1],duration:1e3,easing:"easeInOutQuad"})}),e.addEventListener("blur",()=>{a({targets:".about-image",rotate:"0turn",scale:[1.1,1],duration:1e3,easing:"easeInOutQuad"})})});const c=document.querySelectorAll(".project-item"),p=document.querySelector(".btn-load");let l=0;const q=()=>{for(let t=l;t<l+3;t++)c[t]&&(c[t].classList.remove("is-hidden"),p.classList.remove("is-hidden"));const e=c[0].getBoundingClientRect().height;window.scrollBy({top:e*.5,left:0,behavior:"smooth"}),l+=3,l>=c.length&&(p.classList.add("is-hidden"),u.info({message:"Sorry, this is the last project",position:"topRight"}))};p.addEventListener("click",q);q();new B(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-trigger",panelClass:"ac-panel",duration:600,openOnInit:[0],beforeOpen:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const x="https://portfolio-js.b.goit.study/api/reviews",k=document.querySelector(".reviews-list"),v=document.querySelector(".swiper-next-btn"),f=document.querySelector(".swiper-prev-btn"),A=document.querySelector(".reviews");let d=!1,g=!1;async function T(){try{const t=(await M.get(x)).data;t.length===0?(g=!1,d=!1):(g=!0,d=!0,P(t),N()),w()}catch(e){console.error(e),d=!1,w()}}function P(e){const t=e.map(({author:s,avatar_url:n,review:o})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${o}</p>
            <div class="author-info">
              <img class="author-avatar" src="${n}" alt="Author avatar" />
              <p class="author-name">${s}</p>
            </div>
          </div>
        </li>
      `).join("");k.innerHTML=t}function N(){new j(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){v.disabled=!0},reachBeginning(){f.disabled=!0},fromEdge(){v.disabled=!1,f.disabled=!1}}})}function w(){const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&!d&&(R(),e.unobserve(s.target))})});e.observe(A)}function R(){g||(u.error({title:"Error",message:"Reviews not found.",position:"topRight"}),k.innerHTML=`
      <li class="swiper-slide review-item">
        <div class="review-item-container">
          <p class="review-text">Not Found</p>
        </div>
      </li>
    `,f.disabled=!0,v.disabled=!0)}T();const $="/project-js-teamwork/assets/icons-svg-BT1NFTr9.svg";function F({title:e,message:t}){return`
  <div class="backdrop">
    <div class="modal-form">
        <button class="modal-close-btn" type="button ">
        <svg class="modal-close-icon" width="24" height="24">
            <use href="${$}#icon-icon-close-menu"></use>
        </svg>
        </button>
        <div class="modal-wrapper">
            <h3 class="modal-h3">${e}</h3>
            <p class="modal-text">${t}</p>
        </div>
    </div>
  </div>
  `}const b={form:document.querySelector(".work-together-right"),email:document.querySelector(".form-input-email"),comments:document.querySelector(".form-input-comments"),modalContainer:document.querySelector(".modal-container")},H="https://portfolio-js.b.goit.study/api/requests",y={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},Q=async e=>{y.body=JSON.stringify(e);try{const t=await fetch(`${H}`,y);if(!t.ok)throw new Error(t.status);return t.json()}catch(t){throw console.log(t),t}},D=async e=>{e.preventDefault();const{email:t,comments:s}=e.target.elements,n={email:t.value,comment:s.value};if(n.email.trim()===""||n.comment.trim()===""){u.error({message:"Please fill in all fields",position:"center",messageColor:"#E74A3B",closeOnEscape:!0});return}try{const{title:o,message:r}=await Q(n);e.target.reset();const i=F({title:o,message:r});b.modalContainer.insertAdjacentHTML("beforeend",i),document.querySelector(".modal-close-btn").addEventListener("click",h),b.modalContainer.querySelector(".backdrop").addEventListener("click",h),document.addEventListener("keydown",O)}catch{u.error({message:"The server is not responding, try again later",position:"center",messageColor:"#E74A3B",closeOnEscape:!0})}};function h(){const e=document.querySelector(".backdrop");e==null||e.remove(),document.removeEventListener("keydown",O)}function O(e){e.key==="Escape"&&h()}b.form.addEventListener("submit",D);const V=document.querySelector("#toggle"),z=document.body;V.addEventListener("click",()=>{z.classList.toggle("dark-theme")});
//# sourceMappingURL=index.js.map
