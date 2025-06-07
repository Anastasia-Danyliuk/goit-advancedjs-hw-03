import{S as l,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=r=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-img"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
      <div class="gallery-info" style="display: flex; justify-content: space-around; padding: 8px; font-size: 14px; border: 1px solid #ddd; border-top: none;">
        <div><strong>Likes</strong><br>${r.likes}</div>
        <div><strong>Views</strong><br>${r.views}</div>
        <div><strong>Comments</strong><br>${r.comments}</div>
        <div><strong>Downloads</strong><br>${r.downloads}</div>
      </div>
    </li>
  `,f=r=>{const o=new URLSearchParams({q:r,orientation:"horizontal",image_type:"photo",safesearch:!0,key:"50729371-43a7836f0c474a05c441d935f"});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},m=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),y=new l(".js-gallery a",{captionsData:"alt",captionDelay:250}),g=r=>{r.preventDefault();const{target:o}=r,s=o.elements.user_query.value;c.classList.add("active"),a.innerHTML="",f(s).finally(()=>{c.classList.remove("active")}).then(n=>{if(n.totalHits===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}const e=n.hits.map(t=>u(t)).join("");a.innerHTML=e,y.refresh()}).catch(n=>{console.log(n)})};m.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
