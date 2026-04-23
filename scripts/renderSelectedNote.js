import { selectedNote } from "./elements.js";

export const renderSelectedNote = (note) => {
  if (note != undefined) {
    let newSelectedNote = `
  <h1 class="selectedNote__title">
            ${note.title}
          </h1>
          <p class="selectedNote__info">
            <span class="selectedNote__date">${note.date}</span> /
            <span class="selectedNote__author">By ${note.author}</span>
          </p>
          <p class="selectedNote__content">
            ${note.value}
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
  `;

    selectedNote.innerHTML = newSelectedNote;
  } else {
    selectedNote.innerHTML = ``;
  }
};
