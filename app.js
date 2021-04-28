const body = document.querySelector("body");
const hamburgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bookmarkNode = document.querySelector(".bookmark");
const bookmarkBtn = document.querySelector(".bookmark a.btn");
const bookmarkSvgBtn = document.querySelector(".bookmark svg");
const backThisProjectBtn = document.querySelector("#backThisProject");
const modalNode = document.querySelector(".modal");
const modalSuccess = document.querySelector(".modal__success");
const modalProject = document.querySelector(".modal__project");
const modalProjectItems = document.querySelectorAll(".modal__project__item");
const modalProjectItemBtns = document.querySelectorAll(
  ".modal__project__item a.btn"
);
const successModalCloseBtn = document.querySelector(".modal__success__close");
const modalCloseBtn = document.querySelector(".modal__project__close");
const selectRewardBtns = document.querySelectorAll(".select-reward");

const toggleClassOnClick = (nodeListener, nodeToToggle, className) => {
  nodeListener.addEventListener("click", () => {
    nodeToToggle.classList.toggle(className);
  });
};
const removeClassOnClick = (nodeListener, nodeToToggle, className) => {
  nodeListener.addEventListener("click", () => {
    nodeToToggle.classList.remove(className);
  });
};
const showSuccessModal = () => {
  modalNode.classList.add("show");
  modalProject.classList.remove("show");
  modalSuccess.classList.add("show");
};
const closeSuccessModal = () => {
  modalNode.classList.remove("show");
  modalProject.classList.remove("show");
  modalSuccess.classList.remove("show");
};

// Hamburger menu
toggleClassOnClick(hamburgerBtn, mobileMenu, "show");
toggleClassOnClick(hamburgerBtn, hamburgerBtn, "open");

// Bookmark
toggleClassOnClick(bookmarkBtn, bookmarkNode, "active");
toggleClassOnClick(bookmarkSvgBtn, bookmarkNode, "active");

// Back project
toggleClassOnClick(backThisProjectBtn, modalNode, "show");
toggleClassOnClick(backThisProjectBtn, modalProject, "show");
removeClassOnClick(modalCloseBtn, body, "blocked");
removeClassOnClick(modalCloseBtn, modalProject, "show");
toggleClassOnClick(modalCloseBtn, modalNode, "show");

// Select reward
selectRewardBtns.forEach((btn) => {
  btn.addEventListener("click", () => showSuccessModal());
});
successModalCloseBtn.addEventListener("click", () => closeSuccessModal());

// Modal project item
modalProjectItems.forEach((item) => {
  item.addEventListener("click", () => {
    // remove another active item
    modalProjectItems.forEach((item) => {
      item.classList.remove("active");
    });
    // toggle active class on clicked item
    item.classList.toggle("active");
  });
});

// Modal project item continue button
modalProjectItemBtns.forEach((button) => {
  button.addEventListener("click", () => {
    showSuccessModal();
  });
});
