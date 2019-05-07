// переменные для главного меню
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__button");

// переменные для отправки формы
var form = document.querySelector(".form");
var inputName = form.querySelector("[id=name]");
var surname = form.querySelector("[id=surname]");
var email = form.querySelector("[id=email]");
var formSubmit = document.querySelector(".form__button");
var modalSucces = document.querySelector(".modal-succes");
var modalFailure = document.querySelector(".modal-failure");
var modalSuccesClose = document.querySelector(".modal-succes__button");
var modalFailureClose = document.querySelector(".modal-failure__button");

if (form) {
  form.addEventListener("submit", function (evt) {
    if(!inputName.value || !surname.value || !email.value) {
      evt.preventDefault ();
      modalFailure.classList.add("modal__show");
      console.log ("Заполните форму");
    } else {
      console.log ("Форма отправлена");
      modalSucces.classList.add("modal__show");
    };
  });
  modalSuccesClose.addEventListener("click", function (evt) {
    modalSucces.classList.remove("modal__show");
  });
  modalFailureClose.addEventListener("click", function (evt) {
    modalFailure.classList.remove("modal__show");
  });
};

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
