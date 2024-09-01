// get all images
const allImages = document.querySelectorAll(
  ".project-article__img-block-image"
);

// add click listeners to images
allImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    // check if image has a 'large' class
    let isLarge = false;
    if (e.target.classList.contains("img--large")) {
      isLarge = true;
    }
    promteToLightbox(image, isLarge);
  });
});

// function to create lightbox
function promteToLightbox(image, isLarge) {
  // disable scroll
  document.body.style.overflow = "hidden";

  // adjust body padding for buttons
  document.body.style.paddingRight = "15px";

  // create lightBox element
  let lightBox = document.createElement("div");
  lightBox.className = "lightBox";
  // if large, add large class ----------------
  if (isLarge) {
    lightBox.classList.add("lightBox--large");
  }
  // -------------------------------------------
  document.body.appendChild(lightBox);
  lightBox.addEventListener("click", (e) => {
    zoomOrClose(e);
  });

  // create close button
  let lightBoxCloseBtn = document.createElement("div");
  lightBoxCloseBtn.className = "lightBoxBtn lightBoxCloseBtn";
  lightBoxCloseBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="lightBoxBtn-icon" d="M7.4959 8.40078L2.5959 13.3008C2.41257 13.4841 2.17923 13.5758 1.8959 13.5758C1.61257 13.5758 1.37923 13.4841 1.1959 13.3008C1.01257 13.1174 0.920898 12.8841 0.920898 12.6008C0.920898 12.3174 1.01257 12.0841 1.1959 11.9008L6.0959 7.00078L1.1959 2.10078C1.01257 1.91745 0.920898 1.68411 0.920898 1.40078C0.920898 1.11745 1.01257 0.884115 1.1959 0.700781C1.37923 0.517448 1.61257 0.425781 1.8959 0.425781C2.17923 0.425781 2.41257 0.517448 2.5959 0.700781L7.4959 5.60078L12.3959 0.700781C12.5792 0.517448 12.8126 0.425781 13.0959 0.425781C13.3792 0.425781 13.6126 0.517448 13.7959 0.700781C13.9792 0.884115 14.0709 1.11745 14.0709 1.40078C14.0709 1.68411 13.9792 1.91745 13.7959 2.10078L8.8959 7.00078L13.7959 11.9008C13.9792 12.0841 14.0709 12.3174 14.0709 12.6008C14.0709 12.8841 13.9792 13.1174 13.7959 13.3008C13.6126 13.4841 13.3792 13.5758 13.0959 13.5758C12.8126 13.5758 12.5792 13.4841 12.3959 13.3008L7.4959 8.40078Z" fill="#f2f2f2"/>
</svg>`;
  lightBox.appendChild(lightBoxCloseBtn);

  // create zoom button (if large)
  if (isLarge) {
    let lightBoxZoomBtn = document.createElement("div");
    lightBoxZoomBtn.className = "lightBoxBtn lightBoxZoomBtn";
    lightBoxZoomBtn.innerHTML = `<svg class="lightBoxBtn-icon__zoom-in" width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="lightBoxBtn-icon" fill-rule="evenodd" clip-rule="evenodd" d="M13.3539 7.62256C13.3539 10.6602 10.8915 13.1226 7.85388 13.1226C4.81628 13.1226 2.35388 10.6602 2.35388 7.62256C2.35388 4.58496 4.81628 2.12256 7.85388 2.12256C10.8915 2.12256 13.3539 4.58496 13.3539 7.62256ZM15.3539 7.62256C15.3539 9.42285 14.7196 11.075 13.6622 12.3677L16.2656 14.9712C16.6561 15.3616 16.6561 15.9949 16.2656 16.3853C15.875 16.7759 15.2419 16.7759 14.8513 16.3853L12.201 13.7349C10.9747 14.6086 9.47437 15.1226 7.85388 15.1226C3.71179 15.1226 0.353882 11.7646 0.353882 7.62256C0.353882 3.48047 3.71179 0.122559 7.85388 0.122559C11.996 0.122559 15.3539 3.48047 15.3539 7.62256ZM7.85388 3.62256C7.30164 3.62256 6.85388 4.07031 6.85388 4.62256V6.62256H4.85388C4.30164 6.62256 3.85388 7.07031 3.85388 7.62256C3.85388 8.1748 4.30164 8.62256 4.85388 8.62256H6.85388V10.6226C6.85388 11.1748 7.30164 11.6226 7.85388 11.6226C8.40613 11.6226 8.85388 11.1748 8.85388 10.6226V8.62256H10.8539C11.4061 8.62256 11.8539 8.1748 11.8539 7.62256C11.8539 7.07031 11.4061 6.62256 10.8539 6.62256H8.85388V4.62256C8.85388 4.07031 8.40613 3.62256 7.85388 3.62256Z" fill="#f2f2f2"/>
</svg>
<svg class="lightBoxBtn-icon__zoom-out" width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="lightBoxBtn-icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.67566 13.1226C10.7133 13.1226 13.1757 10.6602 13.1757 7.62256C13.1757 4.58496 10.7133 2.12256 7.67566 2.12256C4.63806 2.12256 2.17566 4.58496 2.17566 7.62256C2.17566 10.6602 4.63806 13.1226 7.67566 13.1226ZM7.67566 15.1226C9.29614 15.1226 10.7965 14.6086 12.0228 13.7349L14.6731 16.3853C15.0637 16.7759 15.6968 16.7759 16.0874 16.3853C16.4779 15.9949 16.4779 15.3616 16.0874 14.9712L13.484 12.3677C14.5414 11.075 15.1757 9.42285 15.1757 7.62256C15.1757 3.48047 11.8177 0.122559 7.67566 0.122559C3.53357 0.122559 0.175659 3.48047 0.175659 7.62256C0.175659 11.7646 3.53357 15.1226 7.67566 15.1226ZM11.6757 7.62256C11.6757 7.07031 11.2279 6.62256 10.6757 6.62256H4.67566C4.12341 6.62256 3.67566 7.07031 3.67566 7.62256C3.67566 8.1748 4.12341 8.62256 4.67566 8.62256H10.6757C11.2279 8.62256 11.6757 8.1748 11.6757 7.62256Z" fill="#f2f2f2"/>
</svg>`;
    lightBox.appendChild(lightBoxZoomBtn);
  }

  // create lightbox img element
  let lightBoxImg = document.createElement("img");
  lightBoxImg.className = "lightBoxImg";
  // if large, add large class ----------------
  if (isLarge) {
    lightBoxImg.classList.add("lightBoxImg--large");
  }
  // -------------------------------------------
  lightBoxImg.src = image.src;
  lightBox.appendChild(lightBoxImg);
}

// function to either:
// - zoom into the img (if the image is clicked)
// - OR close the lightbox (if any other area of the lightbox is clicked)
function zoomOrClose(e) {
  // get lightbox and lightbox img
  let lightBox = document.querySelector(".lightBox");
  let lightBoxImg = document.querySelector(".lightBoxImg");
  let zoomBtn = document.querySelector(".lightBoxZoomBtn");

  console.log(e.target);

  if (
    !(
      e.target.classList.contains("lightBoxImg") ||
      e.target.classList.contains("lightBoxZoomBtn") ||
      e.target.parentElement.classList.contains("lightBoxZoomBtn") ||
      e.target.parentElement.parentElement.classList.contains("lightBoxZoomBtn")
    )
  ) {
    // remove lightbox - back to page
    lightBox.remove();
    // enable scroll
    document.body.style.overflow = "auto";
    // adjust body padding
    document.body.style.paddingRight = "0";
  } else {
    // if img is large, toggle 'zoomed' class to zoom in
    if (lightBoxImg.classList.contains("lightBoxImg--large")) {
      lightBox.classList.toggle("lightBox--zoomed");
      lightBoxImg.classList.toggle("lightBoxImg--zoomed");
      zoomBtn.classList.toggle("lightBoxZoomBtn--zoomed");
    }
  }
}
