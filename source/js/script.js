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

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var mobileColumns = document.querySelectorAll(".table-price__cell--mobile");
var togglesContainer = document.querySelector(".slider__toggles");
var sliderButtons = Array.from(document.querySelectorAll(".slider__toggle"));

var tableColumnsArr = Array.from(mobileColumns);

var MAX_WIDTH = 659;

var elementsObj = tableColumnsArr.reduce(function (acc, item) {
  return _defineProperty({
    acc: acc
  }, item.id, [].concat(_toConsumableArray(acc[item.id] || []), [item]));
}, {});


var onTableTogglesClick = function onTableTogglesClick(evt) {
  if (evt.target.classList.contains("slider__toggle")) {
    if (!evt.target.classList.contains("slider__toggle--current")) {
      // кнопки
      var currBtn = togglesContainer.querySelector(".slider__toggle--current");
      currBtn.classList.remove("slider__toggle--current");
      evt.target.classList.add("slider__toggle--current");

      // слайды
      elementsObj[currBtn.id].forEach(function (element) {
        return element.classList.remove("table-price__cell--current");
      });

      elementsObj[evt.target.id].forEach(function (element) {
        return element.classList.add("table-price__cell--current");
      });

      // translate the table
      // const tableStyle = table.style;
      // tableStyle.transform = `translateX(calc((-100vw + 40px) * ${evt.target.id}))`;
      // tableStyle.transition = `transform 0.8s ease-in-out`;
      measureViewPortWidth(maxWidth, evt.target.id);

      // return evt.target.id;
    }
  }
};

var maxWidth = window.matchMedia("(max-width: " + MAX_WIDTH + "px)");

var measureViewPortWidth = function measureViewPortWidth(width, number) {
  if (width.matches) {
    // If media query matches
    table.style.transform = "compStyles";
    var tableStyle = table.style;
    tableStyle.transform = "translateX(calc((-100vw + 40px) * " + number + "))";
    tableStyle.transition = "transform 0.8s ease-in-out";

    var compStyles = window.getComputedStyle(table).getPropertyValue("transform");
  } else {
    table.style = "";
  }
};

togglesContainer.addEventListener("click", onTableTogglesClick);

measureViewPortWidth(maxWidth);
maxWidth.addListener(measureViewPortWidth);
