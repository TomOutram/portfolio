// get all images
const allImages = document.querySelectorAll(
  ".project-article__img-block-image"
);

// add click listeners to images
allImages.forEach((image) => {
  image.addEventListener("click", () => {
    promteToLightbox(image);
  });
});

// function to create lightbox
function promteToLightbox(image) {
  // disable scroll
  document.body.style.overflow = "hidden";

  // adjust body padding for buttons
  document.body.style.paddingRight = "15px";

  // create lightBox element
  let lightBox = document.createElement("div");
  lightBox.className = "lightBox";
  document.body.appendChild(lightBox);
  lightBox.addEventListener("click", (e) => {
    zoomOrClose(e);
  });

  // create close button
  let lightBoxCloseBtn = document.createElement("div");
  lightBoxCloseBtn.className = "lightBoxCloseBtn";
  lightBoxCloseBtn.innerHTML = `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.4959 8.40078L2.5959 13.3008C2.41257 13.4841 2.17923 13.5758 1.8959 13.5758C1.61257 13.5758 1.37923 13.4841 1.1959 13.3008C1.01257 13.1174 0.920898 12.8841 0.920898 12.6008C0.920898 12.3174 1.01257 12.0841 1.1959 11.9008L6.0959 7.00078L1.1959 2.10078C1.01257 1.91745 0.920898 1.68411 0.920898 1.40078C0.920898 1.11745 1.01257 0.884115 1.1959 0.700781C1.37923 0.517448 1.61257 0.425781 1.8959 0.425781C2.17923 0.425781 2.41257 0.517448 2.5959 0.700781L7.4959 5.60078L12.3959 0.700781C12.5792 0.517448 12.8126 0.425781 13.0959 0.425781C13.3792 0.425781 13.6126 0.517448 13.7959 0.700781C13.9792 0.884115 14.0709 1.11745 14.0709 1.40078C14.0709 1.68411 13.9792 1.91745 13.7959 2.10078L8.8959 7.00078L13.7959 11.9008C13.9792 12.0841 14.0709 12.3174 14.0709 12.6008C14.0709 12.8841 13.9792 13.1174 13.7959 13.3008C13.6126 13.4841 13.3792 13.5758 13.0959 13.5758C12.8126 13.5758 12.5792 13.4841 12.3959 13.3008L7.4959 8.40078Z" fill="#dedede"/>
</svg>`;
  lightBox.appendChild(lightBoxCloseBtn);

  // create lightbox img element
  let lightBoxImg = document.createElement("img");
  lightBoxImg.className = "lightBoxImg";
  lightBoxImg.src = image.src;
  lightBox.appendChild(lightBoxImg);
  // lightBox.addEventListener("click", (e) => {
  //   closeLightBox(e);
  // });
}

// // function to remove lightbox
// function closeLightBox(e) {
//   if (!e.target.classList.contains("lightBoxImg")) {
//     let lightBox = document.querySelector(".lightBox");
//     lightBox.remove();

//     // enable scroll
//     document.body.style.overflow = "auto";

//     // adjust body padding
//     document.body.style.paddingRight = "0";
//   }
// }

// function to either:
// - zoom into the img (if the image is clicked)
// - OR close the lightbox (if any other area of the lightbox is clicked)
function zoomOrClose(e) {
  // get lightbox and lightbox img
  let lightBox = document.querySelector(".lightBox");
  let lightBoxImg = document.querySelector(".lightBoxImg");

  if (e.target.classList.contains("lightBoxImg")) {
    // style lightbox
    lightBox.style.overflow = "auto";
    lightBox.style.alignItems = "safe center";
    lightBox.style.justifyContent = "safe center";

    // style lightbox img
    lightBoxImg.style.width = "auto";
    lightBoxImg.style.height = "auto";
    lightBoxImg.style.maxWidth = "none";
    lightBoxImg.style.maxHeight = "none";
  } else {
    // remove lightbox - back to page
    lightBox.remove();
    // enable scroll
    document.body.style.overflow = "auto";
    // adjust body padding
    document.body.style.paddingRight = "0";
  }
}
