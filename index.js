import{i as d,A as k,a as B,S as M}from"./assets/vendor-B4BOQ3PJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const j=document.querySelector(".js-open-menu"),w=document.querySelector("#close-modal"),y=document.querySelector(".js-modal"),b=document.querySelector(".modal-nav-item");function O(){y.classList.remove("is-hidden"),w.addEventListener("click",u),b.addEventListener("click",u)}function u(){y.classList.add("is-hidden"),w.removeEventListener("click",u),b.removeEventListener("click",u)}j.addEventListener("click",O);const c=document.querySelectorAll(".project-item"),m=document.querySelector(".btn-load");let a=0;const S=()=>{for(let t=a;t<a+3;t++)c[t]&&(c[t].classList.remove("is-hidden"),m.classList.remove("is-hidden"));const e=c[0].getBoundingClientRect().height;window.scrollBy({top:e*.5,left:0,behavior:"smooth"}),a+=3,a>=c.length&&(m.classList.add("is-hidden"),d.info({message:"Sorry, this is the last project",position:"topRight"}))};m.addEventListener("click",S);S();new k(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-header",panelClass:"ac-panel",duration:4e3,openOnInit:[0],beforeOpen:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const A="https://portfolio-js.b.goit.study/api/reviews",E=document.querySelector(".reviews-list"),p=document.querySelector(".swiper-next-btn"),f=document.querySelector(".swiper-prev-btn"),C=document.querySelector(".reviews");let l=!1;async function x(){try{const t=(await B.get(A)).data;t.length===0?l=!1:(l=!0,P(t),I())}catch(e){l=!1,console.error(e)}}function P(e){const t=e.map(({author:n,avatar_url:s,review:o})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${o}</p>
            <div class="author-info">
              <img class="author-avatar" src="${s}" alt="Author avatar" />
              <p class="author-name">${n}</p>
            </div>
          </div>
        </li>
      `).join("");E.innerHTML=t}function I(){new M(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){p.disabled=!0},reachBeginning(){f.disabled=!0},fromEdge(){p.disabled=!1,f.disabled=!1}}})}const L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!l&&(T(),L.unobserve(t.target))})});L.observe(C);function T(){d.error({title:"Error",message:"Reviews not found.",position:"topRight"}),E.innerHTML=`
    <li class="swiper-slide review-item">
      <div class="review-item-container">
        <p class="review-text">Not Found</p>
      </div>
    </li>
  `,f.disabled=!0,p.disabled=!0}x();function N({title:e,message:t}){return`
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
  `}const v={form:document.querySelector(".work-together-right"),email:document.querySelector(".form-input-email"),comments:document.querySelector(".form-input-comments"),modalContainer:document.querySelector(".modal-container")},R="https://portfolio-js.b.goit.study/api/requests",g={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},$=async e=>{g.body=JSON.stringify(e);try{const t=await fetch(`${R}`,g);if(!t.ok)throw new Error(t.status);return t.json()}catch(t){throw console.log(t),t}},H=async e=>{e.preventDefault();const{email:t,comments:n}=e.target.elements,s={email:t.value,comment:n.value};if(s.email.trim()===""||s.comment.trim()===""){d.error({message:"Please fill in all fields",position:"center",messageColor:"#E74A3B",closeOnEscape:!0});return}try{const{title:o,message:r}=await $(s);e.target.reset();const i=N({title:o,message:r});v.modalContainer.insertAdjacentHTML("beforeend",i),document.querySelector(".modal-close-btn").addEventListener("click",h),v.modalContainer.querySelector(".backdrop").addEventListener("click",h),document.addEventListener("keydown",q)}catch{d.error({message:"The server is not responding, try again later",position:"center",messageColor:"#E74A3B",closeOnEscape:!0})}};function h(){const e=document.querySelector(".backdrop");e==null||e.remove(),document.removeEventListener("keydown",q)}function q(e){e.key==="Escape"&&h()}v.form.addEventListener("submit",H);
//# sourceMappingURL=index.js.map
