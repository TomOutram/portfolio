// get anchor menu items
const anchorItems = document.querySelectorAll(
  ".project-article__anchor-menu-item"
);

// add click listener to each menu item
// on click - run 'selectAnchorItem' function to toggle 'selected' class
for (let item of anchorItems) {
  item.addEventListener("click", (e) => selectAnchorItem(e));
}

// loop through all menu items - remove the 'selected' class
// toggle 'selected' class on the clicked menu item
function selectAnchorItem(e) {
  for (let item of anchorItems) {
    item.classList.remove("project-article__anchor-menu-item--selected");
  }
  e.target.classList.toggle("project-article__anchor-menu-item--selected");

  // scroll to corresponding heading on page
  scrollToTextblock(e.target.dataset.anchorLink);
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
