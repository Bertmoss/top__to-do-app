
const nav = document.createElement("nav");
nav.classList.add("display__nav", "p-display__nav")
const navList = document.createElement("ul");
navList.classList.add("nav__list", "p-nav__list")


function createListItem(text) {
  let listItem = document.createElement("li");
  listItem.classList.add("nav__list-item", "p-nav__list-item")
  let span = document.createElement("span");
  span.textContent = text;
  listItem.appendChild(span);
  navList.appendChild(listItem)
  
  return listItem;
}

nav.appendChild(navList)






export {nav, createListItem}
