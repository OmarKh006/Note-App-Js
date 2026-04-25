var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=e=>{let t=localStorage.getItem(e);return t?JSON.parse(t):!1}})),i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{i=document.querySelectorAll(`.header__btn`),a=document.querySelector(`#home-page`),o=document.querySelector(`#add-note-page`),s=document.querySelector(`.header`),c=()=>document.querySelectorAll(`.sideBar__note:not(.pinnedNote)`),l=()=>document.querySelectorAll(`.sideBar__note.pinnedNote`),u=document.querySelector(`.selectedNote__icon-button`),d=document.querySelector(`#homeBtn`),f=document.querySelector(`#noteBtn`),p=document.querySelector(`.sideBar__collapseButton`),m=document.querySelector(`.sideBar`),h=document.querySelector(`.selectedNote`),g=document.querySelector(`.nonLaptopLogo`),_=document.querySelector(`#menu`),v=document.querySelector(`.search-bar-icon`),y=document.querySelector(`.headerForm`),b=document.querySelector(`.section`),x=document.querySelector(`.add`),S=document.querySelector(`.addPinned`),C=document.querySelector(`#title`),w=document.querySelector(`#author`),T=document.querySelector(`#note`),E=document.querySelector(`.sideBar__notes:not(.pinned)`),D=document.querySelector(`.sideBar__notes.pinned`),O=()=>document.querySelectorAll(`#deleteNote:not(.deletePinnedNote)`),k=()=>document.querySelectorAll(`.deletePinnedNote`),A=document.querySelector(`.headerForm__searchInput`),j=document.querySelector(`.header__searchInput`),M=document.querySelector(`.headerForm`),N=document.querySelector(`.header__search-form`)})),F,I=e((()=>{F=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))}})),L,R=e((()=>{r(),I(),L=(e,t)=>{if(confirm(`Are you sure ??`)){if(t===`notes`){let r=n(t)||[];r.length&&(r.splice(e,1),F(`notes`,r))}else if(t===`pinnedNotes`){let r=n(t)||[];r.length&&(r.splice(e,1),F(`pinnedNotes`,r))}}}})),z,B=e((()=>{P(),z=e=>{e==null?h.innerHTML=``:h.innerHTML=`
  <h1 class="selectedNote__title">
            ${e.title}
          </h1>
          <p class="selectedNote__info">
            <span class="selectedNote__date">${e.date}</span> /
            <span class="selectedNote__author">By ${e.author}</span>
          </p>
          <p class="selectedNote__content">
            ${e.value}
          </p>
          <svg
            class="selectedNote__icon-button"
            width="95"
            height="95"
            viewBox="10 6 95 95"
            xmlns="http://www.w3.org/2000/svg"
            tabindex="0"
            role="button"
          >
            <defs>
              <filter
                id="add-btn-shadow"
                x="0"
                y="0"
                width="115"
                height="115"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.92549 0 0 0 0 0.443137 0 0 0 0 0.376471 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6502_189"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6502_189"
                  result="shape"
                />
              </filter>
            </defs>
            <g filter="url(#add-btn-shadow)">
              <rect
                x="25"
                y="16"
                width="65"
                height="65"
                rx="32.5"
                fill="#EC7160"
              />
              <path
                d="M73.3342 47H58.6675V32.3333C58.6675 31.9797 58.5271 31.6406 58.277 31.3905C58.027 31.1405 57.6878 31 57.3342 31C56.9806 31 56.6414 31.1405 56.3914 31.3905C56.1413 31.6406 56.0009 31.9797 56.0009 32.3333V47H41.3342C40.9806 47 40.6414 47.1405 40.3914 47.3905C40.1413 47.6406 40.0009 47.9797 40.0009 48.3333C39.9943 48.5066 40.0249 48.6793 40.0907 48.8397C40.1565 49.0002 40.256 49.1447 40.3823 49.2634C40.5087 49.3822 40.659 49.4725 40.8232 49.5283C40.9874 49.584 41.1617 49.6039 41.3342 49.5867H56.0009V64.3333C56.0009 64.687 56.1413 65.0261 56.3914 65.2761C56.6414 65.5262 56.9806 65.6667 57.3342 65.6667C57.6878 65.6667 58.027 65.5262 58.277 65.2761C58.5271 65.0261 58.6675 64.687 58.6675 64.3333V49.6667H73.3342C73.6878 49.6667 74.027 49.5262 74.277 49.2761C74.5271 49.0261 74.6675 48.687 74.6675 48.3333C74.6675 47.9797 74.5271 47.6406 74.277 47.3905C74.027 47.1405 73.6878 47 73.3342 47Z"
                fill="white"
              />
            </g>
          </svg>
  `}})),V,H=e((()=>{P(),V=e=>{e===`home`?(a.style.display=`flex`,o.style.display=`none`,d.setAttribute(`aria-current`,`page`),f.removeAttribute(`aria-current`)):e===`note`&&(a.style.display=`none`,o.style.display=`block`,d.removeAttribute(`aria-current`),f.setAttribute(`aria-current`,`page`))}})),U,W=e((()=>{R(),P(),r(),K(),B(),H(),U=()=>{c().forEach((e,t)=>{e?.addEventListener(`click`,e=>{c().forEach(e=>e.classList.remove(`selected`)),l().forEach(e=>e.classList.remove(`selected`)),e.currentTarget.classList.add(`selected`),z(n(`notes`)[t])})}),l().forEach((e,t)=>{e?.addEventListener(`click`,e=>{c().forEach(e=>e.classList.remove(`selected`)),l().forEach(e=>e.classList.remove(`selected`)),e.currentTarget.classList.add(`selected`),z(n(`pinnedNotes`)[t])})}),O().forEach((e,t)=>{e?.addEventListener(`click`,()=>{e.dataset.index?L(Number.parseInt(e.dataset.index),`notes`):L(t,`notes`);let r=n(`notes`)||[],i=n(`pinnedNotes`)||[];if(r.length||i.length){G();return}else G(),V(`note`)})}),k().forEach((e,t)=>{e?.addEventListener(`click`,()=>{e.dataset.index?L(Number.parseInt(e.dataset.index),`pinnedNotes`):L(t,`pinnedNotes`);let r=n(`notes`)||[],i=n(`pinnedNotes`)||[];if(r.length||i.length){G();return}else G(),V(`note`)})}),c().forEach(e=>{e?.addEventListener(`click`,()=>{screen.width<=600&&(b?.classList.add(`noteOpened`),m?.classList.add(`collapsed`))})})}})),G,K=e((()=>{P(),r(),W(),G=({regularSearch:e=void 0,pinnedSearch:t=void 0}={})=>{let r=``,i=``;if(!e&&!t){let e=n(`notes`)||[],t=n(`pinnedNotes`)||[];e&&e.length?(e.forEach(e=>{r+=`
            <li class="sideBar__note">
              <h3 class="sideBar__noteTitle">${e.title}</h3>
              <p class="sideBar__noteText">${e.value}</p>
              <div class="sideBar__noteInfo">
                  <span class="sideBar__noteDate">${e.date}</span>
                  <button
                      type="button"
                      class="sideBar__noteButton"
                      id="deleteNote"
                  >
                      Delete
                  </button>
              </div>
            </li>
            `}),E.innerHTML=r):E.innerHTML=``,t.length?(t.forEach(e=>{i+=`
        <li class="sideBar__note pinnedNote">
          <h3 class="sideBar__noteTitle">${e.title}</h3>
          <p class="sideBar__noteText">${e.value}</p>
          <div class="sideBar__noteInfo pBtn">
            <span class="sideBar__noteDate">${e.date}</span>
            <button
                type="button"
                class="sideBar__noteButton deletePinnedNote"
                id="deleteNote"
            >
                Delete
            </button>
          </div>
        </li>
    `}),D.innerHTML=i):D.innerHTML=``,U()}else e===404&&t===404?alert(`Not found!`):(e&&e.length&&(e.forEach(e=>{r+=`
            <li class="sideBar__note">
              <h3 class="sideBar__noteTitle">${e.value.title}</h3>
              <p class="sideBar__noteText">${e.value.value}</p>
              <div class="sideBar__noteInfo">
                  <span class="sideBar__noteDate">${e.value.date}</span>
                  <button
                      type="button"
                      class="sideBar__noteButton"
                      id="deleteNote"
                      data-index="${e.index}"
                  >
                      Delete
                  </button>
              </div>
            </li>
            `}),E.innerHTML=r,U()),t&&t.length&&(t.forEach(e=>{i+=`
        <li class="sideBar__note pinnedNote">
          <h3 class="sideBar__noteTitle">${e.value.title}</h3>
          <p class="sideBar__noteText">${e.value.value}</p>
          <div class="sideBar__noteInfo pBtn">
            <span class="sideBar__noteDate">${e.value.date}</span>
            <button
                type="button"
                class="sideBar__noteButton deletePinnedNote"
                id="deleteNote"
                data-index="${e.index}"
            >
                Delete
            </button>
          </div>
        </li>
    `}),D.innerHTML=i,U()))}})),q,J=e((()=>{r(),K(),H(),q=()=>{let e=n(`notes`)||[],t=n(`pinnedNotes`)||[];if(e.length||t.length){G(),V(`home`);return}V(`note`)}})),Y,X=e((()=>{r(),I(),Y=({title:e,author:t,value:r,date:i,pinned:a=!1})=>{let o=n(`notes`)||[],s=n(`pinnedNotes`)||[],c={title:e,author:t,value:r,date:i,pinned:a};a===!0?(s.push(c),F(`pinnedNotes`,s)):(o.push(c),F(`notes`,o))}})),Z,Q=e((()=>{r(),K(),Z=e=>{let t=n(`notes`)||[],r=n(`pinnedNotes`)||[],i=t.map((e,t)=>({value:e,index:t})).filter(t=>t.value.value.toLowerCase().includes(e.toLowerCase())),a=r.map((e,t)=>({value:e,index:t})).filter(t=>t.value.value.toLowerCase().includes(e.toLowerCase()));G({regularSearch:i.length===0?404:i,pinnedSearch:a.length===0?404:a})}})),$=t((()=>{X(),P(),K(),Q(),H();var e=new Date,t={year:`numeric`,month:`long`,day:`numeric`};i?.forEach(e=>{e?.addEventListener(`click`,e=>{i?.forEach(e=>{e.removeAttribute(`aria-current`)}),e.currentTarget.setAttribute(`aria-current`,`page`),e.currentTarget.dataset.page===`home`?V(`home`):e.currentTarget.dataset.page===`note`&&V(`note`)})}),u?.addEventListener(`click`,()=>{V(`note`),f?.setAttribute(`aria-current`,`page`),d?.removeAttribute(`aria-current`)}),p?.addEventListener(`click`,()=>{m?.classList.toggle(`collapsed`)}),_?.addEventListener(`change`,()=>{s?.classList.toggle(`burgerChecked`),o?.classList.toggle(`burgerChecked`),g?.classList.toggle(`burgerChecked`),y?.classList.toggle(`shrinked`)}),v?.addEventListener(`click`,()=>{y?.classList.toggle(`collapse`)}),p?.addEventListener(`click`,()=>{b?.classList.contains(`noteOpened`)&&(b?.classList.remove(`noteOpened`),m?.classList.remove(`collapsed`))}),x?.addEventListener(`click`,n=>{n.preventDefault();let r=C.value,i=w.value,a=T.value,o=e.toLocaleDateString(`en-US`,t);if(!r||!i||!a){alert(`Please fill in the missing field`);return}Y({title:r,author:i,value:a,date:o}),G(),V(`home`)}),S?.addEventListener(`click`,n=>{n.preventDefault();let r=C.value,i=w.value,a=T.value,o=e.toLocaleDateString(`en-US`,t);if(!r||!i||!a){alert(`Please fill in the missing field`);return}Y({title:r,author:i,value:a,date:o,pinned:!0}),G(),V(`home`)}),M.addEventListener(`submit`,e=>{e.preventDefault();let t=A.value;Z(t)}),N.addEventListener(`submit`,e=>{e.preventDefault();let t=j.value;Z(t)})}));t((()=>{J(),$(),q()}))();