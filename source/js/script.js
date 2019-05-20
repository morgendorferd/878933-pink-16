var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__button");

var table = document.querySelector(".table-price");

var form = document.querySelector(".form");
var formSubmit = document.querySelector(".form__button");
var modalSucces = document.querySelector(".modal-succes");
var modalFailure = document.querySelector(".modal-failure");
var modalSuccesClose = document.querySelector(".modal-succes__button");
var modalFailureClose = document.querySelector(".modal-failure__button");

if (form) {
  var inputName = form.querySelector("[id=name]");
  var surname = form.querySelector("[id=surname]");
  var email = form.querySelector("[id=email]");

  form.addEventListener("submit", function (evt) {
    if(!inputName.value || !surname.value || !email.value) {
      evt.preventDefault ();
      modalFailure.classList.add("modal__show");
    } else {
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
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var table = document.querySelector(".table-price");
var mobileColumns = document.querySelectorAll(".table-price__cell--mobile");
var togglesContainer = document.querySelector(".slider__toggles");
var sliderButtons = Array.from(document.querySelectorAll(".slider__toggle"));
var tableColumnsArr = Array.from(mobileColumns);
var MAX_WIDTH = 659; // переход на планшетную версию по макету

var elementsObj = tableColumnsArr.reduce(function (acc, item) {
  return _objectSpread({}, acc, _defineProperty({}, item.dataset.id, [].concat(_toConsumableArray(acc[item.dataset.id] || []), [item])));
}, {});
var currentSlide = tableColumnsArr.find(function (el) {
  return el.classList.contains("table-price__cell--current");
}).dataset.id;

var changeSlide = function changeSlide(number) {
  table.style.transform = "translateX(calc((-100vw + 40px) * ".concat(number, "))");
  table.style.transition = "transform 0.8s ease-in-out";
};

var onTableTogglesClick = function onTableTogglesClick(evt) {
  if (evt.target.classList.contains("slider__toggle")) {
    if (!evt.target.classList.contains("slider__toggle--current")) {
      // кнопки
      var currBtn = togglesContainer.querySelector(".slider__toggle--current");
      currBtn.classList.remove("slider__toggle--current");
      evt.target.classList.add("slider__toggle--current"); // слайды

      elementsObj[currBtn.dataset.id].forEach(function (element) {
        return element.classList.remove("table-price__cell--current");
      });
      elementsObj[evt.target.dataset.id].forEach(function (element) {
        return element.classList.add("table-price__cell--current");
      }); // translate the table

      currentSlide = Number(evt.target.dataset.id);
      changeSlide(currentSlide);
    }
  }
};

var maxWidth = window.matchMedia("(max-width: ".concat(MAX_WIDTH, "px)"));

var measureViewPortWidth = function measureViewPortWidth(width, number) {
  if (width.matches) {
    changeSlide(currentSlide);
  } else {
    table.style = "";
  }
};

togglesContainer.addEventListener("click", onTableTogglesClick);
var mql = window.matchMedia("(max-width: ".concat(MAX_WIDTH, "px)"));
mql.addListener(measureViewPortWidth);
