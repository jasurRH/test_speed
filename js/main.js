var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elButton = document.querySelector(".hero__btn");
var elError = document.querySelector(".hero__error");
var elSpan1 = document.querySelector(".list__span1");
var elSpan2 = document.querySelector(".list__span2");
var elSpan3 = document.querySelector(".list__span3");
var elSpan4 = document.querySelector(".list__span4");



elForm.addEventListener("submit", function(evt){
  evt.preventDefault;
  var input = elInput.value;
  var natija1 = 0;
  var natija2 = 0;
  var natija3 = 0;
  var natija4 = 0;
  if (input > 0 && isNaN) {
    natija1 = (input/3.6).toFixed();
    elSpan1.textContent = `${natija1} soat`;
    natija2 = (input/20.1).toFixed();
    elSpan2.textContent = `${natija2} soat`;
    natija3 = (input/70).toFixed();
    elSpan3.textContent = `${natija3} soat`;
    natija4 = (input/800).toFixed();
    elSpan4.textContent = `${natija4} soat`;
    elInput.classList.add("is-valid")
    return;
  } if (input <= 0) {
    elError.textContent = `Iltimos musbat son kiriting`;
    elInput.classList.add("is-invalid")
    return;
  } else {
    elError.textContent = `Iltimos son kiriting`;
    elInput.classList.add("is-invalid")
    return;
  }
})