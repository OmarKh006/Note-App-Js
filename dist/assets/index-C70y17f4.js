var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=e=>{let t=localStorage.getItem(e);return t?JSON.parse(t):!1}})),i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{i=document.querySelectorAll(`.header__btn`),a=document.querySelector(`#home-page`),o=document.querySelector(`#add-note-page`),s=document.querySelector(`.header`),c=()=>document.querySelectorAll(`.sideBar__note`),l=document.querySelector(`.selectedNote__icon-button`),u=document.querySelector(`#homeBtn`),d=document.querySelector(`#noteBtn`),f=document.querySelector(`.sideBar__collapseButton`),p=document.querySelector(`.sideBar`),m=document.querySelector(`.selectedNote`),h=document.querySelector(`.nonLaptopLogo`),g=document.querySelector(`#menu`),_=document.querySelector(`.search-bar-icon`),v=document.querySelector(`.headerForm`),y=document.querySelector(`.section`),b=document.querySelector(`.add`),x=document.querySelector(`.addPinned`),S=document.querySelector(`#title`),C=document.querySelector(`#author`),w=document.querySelector(`#note`),T=document.querySelector(`.sideBar__notes`),E=document.querySelector(`.sideBar__note.pinned`),D=()=>document.querySelectorAll(`#deleteNote`)})),k,A=e((()=>{k=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))}})),j,M=e((()=>{r(),A(),j=e=>{if(!confirm(`Are you sure ??`))return;let t=n(`notes`);t.splice(e,1),k(`notes`,t)}})),N,P=e((()=>{O(),N=e=>{e==null?m.innerHTML=``:m.innerHTML=`
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
  `}})),F,I=e((()=>{O(),F=e=>{e===`home`?(a.style.display=`flex`,o.style.display=`none`,u.setAttribute(`aria-current`,`page`),d.removeAttribute(`aria-current`)):e===`note`&&(a.style.display=`none`,o.style.display=`block`,u.removeAttribute(`aria-current`),d.setAttribute(`aria-current`,`page`))}})),L,R=e((()=>{M(),O(),r(),B(),P(),I(),L=()=>{c().forEach((e,t)=>{e?.addEventListener(`click`,e=>{c().forEach(e=>{e.classList.remove(`selected`)}),e.currentTarget.classList.add(`selected`);let r=n(`notes`);if(e.currentTarget.classList.contains(`pinned`)){let e=r.filter(e=>e.pinned==1);N(e[e.length-1]);return}N(r[t-1])})}),D().forEach((e,t)=>{e?.addEventListener(`click`,()=>{if(j(t-1),n(`notes`).length){z(),N();return}else F(`note`)})}),c().forEach(e=>{e?.addEventListener(`click`,()=>{screen.width<=600&&(y?.classList.add(`noteOpened`),p?.classList.add(`collapsed`))})})}})),z,B=e((()=>{O(),r(),R(),z=()=>{let e=n(`notes`),t=e.filter(e=>e.pinned==1),r=``;e.forEach(e=>{e.pinned||(r+=`
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
            `)}),t.length?E.innerHTML=`
      <h3 class="sideBar__noteTitle">${t[t.length-1].title}</h3>
      <p class="sideBar__noteText">${t[t.length-1].value}</p>
      <div class="sideBar__noteInfo pBtn">
          <span class="sideBar__noteDate">${t[t.length-1].date}</span>
          <button
              type="button"
              class="sideBar__noteButton"
              id="deleteNote"
          >
              Delete
          </button>
      </div>
    `:E.innerHTML=``,T.innerHTML=r,L()}})),V,H=e((()=>{r(),B(),I(),V=()=>{if(n(`notes`).length){z(),F(`home`);return}F(`note`)}})),U,W=e((()=>{r(),A(),U=({title:e,author:t,value:r,date:i,pinned:a=!1})=>{let o=n(`notes`)||[],s={title:e,author:t,value:r,date:i,pinned:a};o.push(s),k(`notes`,o)}})),G=t((()=>{W(),O(),B(),I();var e=new Date,t={year:`numeric`,month:`long`,day:`numeric`};i?.forEach(e=>{e?.addEventListener(`click`,e=>{i?.forEach(e=>{e.removeAttribute(`aria-current`)}),e.currentTarget.setAttribute(`aria-current`,`page`),e.currentTarget.dataset.page===`home`?F(`home`):e.currentTarget.dataset.page===`note`&&F(`note`)})}),l?.addEventListener(`click`,()=>{F(`note`),d?.setAttribute(`aria-current`,`page`),u?.removeAttribute(`aria-current`)}),f?.addEventListener(`click`,()=>{p?.classList.toggle(`collapsed`)}),g?.addEventListener(`change`,()=>{s?.classList.toggle(`burgerChecked`),o?.classList.toggle(`burgerChecked`),h?.classList.toggle(`burgerChecked`),v?.classList.toggle(`shrinked`)}),_?.addEventListener(`click`,()=>{v?.classList.toggle(`collapse`)}),f?.addEventListener(`click`,()=>{y?.classList.contains(`noteOpened`)&&(y?.classList.remove(`noteOpened`),p?.classList.remove(`collapsed`))}),b?.addEventListener(`click`,n=>{n.preventDefault();let r=S.value,i=C.value,a=w.value,o=e.toLocaleDateString(`en-US`,t);if(!r||!i||!a){alert(`Please fill in the missing field`);return}U({title:r,author:i,value:a,date:o}),z(),F(`home`)}),x?.addEventListener(`click`,n=>{n.preventDefault();let r=S.value,i=C.value,a=w.value,o=e.toLocaleDateString(`en-US`,t);if(!r||!i||!a){alert(`Please fill in the missing field`);return}U({title:r,author:i,value:a,date:o,pinned:!0}),z(),F(`home`)})}));t((()=>{H(),G(),V()}))();