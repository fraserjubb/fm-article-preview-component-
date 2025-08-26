const shareMenu = document.querySelector(".share-component");
const btn = document.querySelector(".card__btn");
const svg = document.querySelector(".card__btn-svg");

function resetBtn() {
  btn.style.backgroundColor = "var(--clr-grey200)";
  svg.style.fill = "var(--clr-grey500)";
}

function btnClicked(e) {
  e.stopPropagation();
  if (shareMenu.classList.contains("hidden")) {
    btn.style.backgroundColor = "var(--clr-grey500)";
    svg.style.fill = "white";
  } else {
    resetBtn();
  }
  shareMenu.classList.toggle("hidden");
}

function hideShare() {
  shareMenu.classList.add("hidden");
  resetBtn();
}

function preventBubble(e) {
  e.stopPropagation();
}

// *** EVENT LISTENERS ***
// Toggle Button:
btn.addEventListener("click", btnClicked);

// Clicking anywhere else will hide menu:
document.addEventListener("click", hideShare);

// Share Menu will not hide it:
shareMenu.addEventListener("click", preventBubble);
