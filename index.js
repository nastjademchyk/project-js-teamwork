import{A as p,i as f,a as w,S as v}from"./assets/vendor-CjTmSLCK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();new p(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-header",panelClass:"ac-panel",duration:4e3,openOnInit:[0],beforeOpen:r=>r.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:r=>r.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const m="https://portfolio-js.b.goit.study/api/reviews",d=document.querySelector(".reviews-list"),c=document.querySelector(".swiper-next-btn"),l=document.querySelector(".swiper-prev-btn"),b=document.querySelector(".reviews");let o=!1;async function g(){try{const t=(await w.get(m)).data;t.length===0?o=!1:(o=!0,h(t),y())}catch(r){o=!1,console.error(r)}}function h(r){const t=r.map(({author:n,avatar_url:s,review:e})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${e}</p>
            <div class="author-info">
              <img class="author-avatar" src="${s}" alt="Author avatar" />
              <p class="author-name">${n}</p>
            </div>
          </div>
        </li>
      `).join("");d.innerHTML=t}function y(){new v(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){c.disabled=!0},reachBeginning(){l.disabled=!0},fromEdge(){c.disabled=!1,l.disabled=!1}}})}const u=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&!o&&(S(),u.unobserve(t.target))})});u.observe(b);function S(){f.error({title:"Error",message:"Reviews not found.",position:"topRight"}),d.innerHTML=`
    <li class="swiper-slide review-item">
      <div class="review-item-container">
        <p class="review-text">Not Found</p>
      </div>
    </li>
  `,l.disabled=!0,c.disabled=!0}g();
//# sourceMappingURL=index.js.map
