const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});

window.addEventListener("click", closeModal);

function closeModal(e) {
  if (e.target == containerEl) {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
  }
}
