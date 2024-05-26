// get text blocks
const allTextBlocks = document.querySelectorAll(".project-article__text-block");

// get anchor menu items
const allAnchorItems = document.querySelectorAll(
  ".project-article__anchor-menu-item"
);

// ----------------------------------------------------------------------
// function to toggle the 'selected' class on anchor menu items
// ----------------------------------------------------------------------
function setSelectedAnchor(anchorItem) {
  // remove 'selected' class from item that is currently selected
  document
    .querySelector(".project-article__anchor-menu-item--selected")
    .classList.remove("project-article__anchor-menu-item--selected");
  // add 'selected' class to the the item that is passed in
  anchorItem.classList.toggle("project-article__anchor-menu-item--selected");
}

// ----------------------------------------------------------------------
// check scroll position and set the current text block the user is on
// ----------------------------------------------------------------------
// set the current text block (1 to start with)
let currentTextBlock = "textBlock-0";
// add listener for scroll
window.addEventListener("scroll", () => {
  // check if scrolled past the top of a text block
  allTextBlocks.forEach((textBlock) => {
    if (window.scrollY >= textBlock.offsetTop - 21) {
      // if scrolled past a text block, change the current text block
      currentTextBlock = textBlock.id;
    }
  });
  // loop through all anchor menu items
  allAnchorItems.forEach((anchorItem) => {
    // if the anchor item matches the current section, call the function to toggle 'selected' class
    if (anchorItem.dataset.anchorLink == currentTextBlock) {
      setSelectedAnchor(anchorItem);
    }
  });
});

// ----------------------------------------------------------------------
// when an anchor item is clicked - scroll to that text block
// ----------------------------------------------------------------------
// add click listeners to anchor items
for (let item of allAnchorItems) {
  item.addEventListener("click", (e) =>
    scrollToTextblock(e.target.dataset.anchorLink)
  );
}
// scroll funtion
function scrollToTextblock(textBlockId) {
  // get the text block that corresponds to the anchor menu item
  const textBlock = document.querySelector(`#${textBlockId}`);
  // get the position info for the textblock
  const textBlockScrollPos = textBlock.getBoundingClientRect();
  // get current scroll position
  const currentScrollPos = document.documentElement.scrollTop;
  // add current scroll postion to the text block y position
  const newScrollPos = textBlockScrollPos.y + currentScrollPos - 20;
  // scroll to the new position
  window.scrollTo(0, newScrollPos);
}
