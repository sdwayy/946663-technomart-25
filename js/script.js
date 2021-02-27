var openFeedbackFormBtn = document.querySelector(".write-us-btn");
var feedbackForm = document.querySelector(".feedback-form");
var closeBtn = document.querySelectorAll(".modal-close");
var openMapPopup = document.querySelector(".min-map-img");
var mapPopup = document.querySelector(".map-container");
var openCartPopupBtns = document.querySelectorAll(".buy-btn");
var cartPopup = document.querySelector(".cart-popup");
var continueBtnCart = document.querySelector(".continue-btn-cart");

if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

closeBtn.forEach(function(item) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackForm && feedbackForm.classList.add("visually-hidden");
    feedbackForm && feedbackForm.classList.remove("show-popup-animation");
    mapPopup && mapPopup.classList.add("visually-hidden");
    mapPopup && mapPopup.classList.remove("show-popup-animation");
    cartPopup.classList.add("visually-hidden");
    cartPopup.classList.remove("show-popup-animation");
  });
});

if (openFeedbackFormBtn) {
  openFeedbackFormBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackForm.classList.remove("visually-hidden");
    feedbackForm.classList.add("show-popup-animation");
  });
}

if (openMapPopup) {
  openMapPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("visually-hidden");
    mapPopup.classList.add("show-popup-animation");
  });
}

openCartPopupBtns.forEach(function(item) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("visually-hidden");
    cartPopup.classList.add("show-popup-animation");
  });
});

continueBtnCart.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.add("visually-hidden");
  cartPopup.classList.remove("show-popup-animation");
});
