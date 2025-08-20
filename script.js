const shareMenu = document.querySelector(".share-component");
const btn = document.querySelector(".card__btn");

function btnClicked(e) {
  e.stopPropagation();
  shareMenu.classList.toggle("hidden");
}

function hideShare() {
  shareMenu.classList.add("hidden");
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
