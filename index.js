import{i as f,A as h,a as g,S as b}from"./assets/vendor-Cv84vpVH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();const o=document.querySelectorAll(".project-item"),d=document.querySelector(".btn-load");let n=0;const v=()=>{for(let t=n;t<n+3;t++)o[t]&&(o[t].classList.remove("is-hidden"),d.classList.remove("is-hidden"));const r=o[0].getBoundingClientRect().height;window.scrollBy({top:r*.5,left:0,behavior:"smooth"}),n+=3,n>=o.length&&(d.classList.add("is-hidden"),f.info({message:"Sorry, this is the last project",position:"topRight"}))};d.addEventListener("click",v);v();new h(".accordion-container",{elementClass:"ac-item",triggerClass:"ac-header",panelClass:"ac-panel",duration:4e3,openOnInit:[0],beforeOpen:r=>r.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:r=>r.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});const y="https://portfolio-js.b.goit.study/api/reviews",w=document.querySelector(".reviews-list"),u=document.querySelector(".swiper-next-btn"),p=document.querySelector(".swiper-prev-btn"),S=document.querySelector(".reviews");let a=!1;async function L(){try{const t=(await g.get(y)).data;t.length===0?a=!1:(a=!0,x(t),q())}catch(r){a=!1,console.error(r)}}function x(r){const t=r.map(({author:c,avatar_url:s,review:e})=>`
        <li class="swiper-slide review-item">
          <div class="review-item-container">
            <p class="review-text">${e}</p>
            <div class="author-info">
              <img class="author-avatar" src="${s}" alt="Author avatar" />
              <p class="author-name">${c}</p>
            </div>
          </div>
        </li>
      `).join("");w.innerHTML=t}function q(){new b(".swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-prev-btn",prevEl:".swiper-next-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{reachEnd(){u.disabled=!0},reachBeginning(){p.disabled=!0},fromEdge(){u.disabled=!1,p.disabled=!1}}})}const m=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&!a&&(E(),m.unobserve(t.target))})});m.observe(S);function E(){f.error({title:"Error",message:"Reviews not found.",position:"topRight"}),w.innerHTML=`
    <li class="swiper-slide review-item">
      <div class="review-item-container">
        <p class="review-text">Not Found</p>
      </div>
    </li>
  `,p.disabled=!0,u.disabled=!0}L();
//# sourceMappingURL=index.js.map
