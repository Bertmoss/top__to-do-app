let footer = document.querySelector("footer")

let divInt = document.createElement("div");
divInt.classList.add("footer__div-decoration--interior");
let divExt = document.createElement("div")
divExt.classList.add("footer__div-decoration--exterior");

let divText = document.createElement("div")
divText.classList.add("footer__div--text")

let createdByText = document.createElement("p");
createdByText.textContent = "Created by Bertmoss";
createdByText.classList.add("footer__text");

divText.appendChild(createdByText);
divExt.appendChild(divInt)
footer.appendChild(divExt);
footer.appendChild(divText);

export {footer} 