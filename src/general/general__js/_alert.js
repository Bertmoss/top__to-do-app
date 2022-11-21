function createAlert(text) {
  let alertDiv = document.createElement("div")
  alertDiv.classList.add("alert")
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("alert__close-btn") 

  closeBtn.addEventListener("click", () => {
    alertDiv.remove();
  })
  alertDiv.appendChild(closeBtn);
  let alertText = document.createElement("p");
  alertText.textContent = text;
  alertDiv.appendChild(alertText)
  
  let body = document.querySelector("body");
  body.appendChild(alertDiv);
  return alertDiv;
}
export {createAlert}