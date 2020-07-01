var slide2 = document.querySelector(".dust-in-the-eyes .slide-2");
var slide1 = document.querySelector(".dust-in-the-eyes .slide-1");
var slide3 = document.querySelector(".dust-in-the-eyes .slide-3");
var slideBut1 = document.querySelector(".slide-but-1");
var slideBut2 = document.querySelector(".slide-but-2");
var slideBut3 = document.querySelector(".slide-but-3");
var modalBut = document.querySelector(".how-to-get-to-us button");
var modalWindow = document.querySelector(".modal-write-to-us");
var modalClose = document.querySelector(".modal-close");


slideBut2.addEventListener("click", function(evt){
  evt.preventDefault();
  slide1.classList.add("hidden-slider");
  slide3.classList.add("hidden-slider");
  slide2.classList.remove("hidden-slider");
  slideBut2.classList.remove("slide-but-hidden");
  slideBut1.classList.add("slide-but-hidden");
  slideBut3.classList.add("slide-but-hidden");


})

slideBut1.addEventListener("click", function(evt){
  evt.preventDefault();
  slide2.classList.add("hidden-slider");
  slide3.classList.add("hidden-slider");
  slide1.classList.remove("hidden-slider");
  slideBut2.classList.add("slide-but-hidden");
  slideBut1.classList.remove("slide-but-hidden");
  slideBut3.classList.add("slide-but-hidden");


})

slideBut3.addEventListener("click", function(evt){
  evt.preventDefault();
  slide1.classList.add("hidden-slider");
  slide2.classList.add("hidden-slider");
  slide3.classList.remove("hidden-slider");
  slideBut3.classList.remove("slide-but-hidden");
  slideBut2.classList.add("slide-but-hidden");
  slideBut1.classList.add("slide-but-hidden");


})

modalBut.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWindow.classList.remove("modal-hide");
  modalWindow.classList.add("modal-show");
})

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWindow.classList.add("modal-hide");
  modalWindow.classList.remove("modal-show");

})
