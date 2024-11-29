"use strict";

// MODAL START //
// Modal Variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const ModalCloseOverlay = document.querySelector("[data-modal-overlay]");

// Modal Function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// Modal eventListener
ModalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);
// MODAL END //

// NOTIFICATION TOAST START //
// Notification Toast Variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// Notification Toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});
// NOTIFICATION TOAST END //

// MOBILE SIDEBAR MENU START //
// Mobile Menu Variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuCloseBtn.length; i++) {
  // Mobile Menu Function
  const mobileMenuClosefunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };
  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });
  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuClosefunc);
  overlay.addEventListener("click", mobileMenuClosefunc);
}
// MOBILE SIDEBAR MENU END //

// MOBILE SIDEBAR GRID START //
// Mobile Grid Variables
const mobileGridOpenBtn = document.querySelectorAll(
  "[data-mobile-Grid-open-btn]"
);
const mobileGrid = document.querySelectorAll("[data-mobile-grid]");
const mobileGridCloseBtn = document.querySelectorAll(
  "[data-mobile-grid-close-btn]"
);
const overlaya = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileGridCloseBtn.length; i++) {
  // Mobile Grid Function
  const mobileGridClosefunc = function () {
    mobileGrid[i].classList.remove("active");
    overlaya.classList.remove("active");
  };
  mobileGridOpenBtn[i].addEventListener("click", function () {
    mobileGrid[i].classList.add("active");
    overlaya.classList.add("active");
  });
  mobileGridCloseBtn[i].addEventListener("click", mobileGridClosefunc);
  overlaya.addEventListener("click", mobileGridClosefunc);
}
// MOBILE SIDEBAR GRID END //

// Accordion Variables Start //
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");
    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
// Accordion Variables End //
