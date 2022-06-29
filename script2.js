const spanEl = document.querySelector("header span");

// (x) - using HTML Attributes:

// spanEl.setAttribute("onclick", 'alert("SetAttribute By AnbuTrisha")');

// (X) - It can't accepts the multiple actions
// spanEl.onclick = function () {
//   alert("Authorized By Anbu");
// };

// spanEl.onclick = function () {
//   alert("Authorized By Trisha");
// };

// function spanElTag() {
//   alert("Hi Trisha");
// }
// spanEl.onclick = spanElTag;

// AddEventListener()
// window.AddEventListener()
// document.AddEventListener()
// Element.AddEventListener()

spanEl.addEventListener("click", function () {
  alert("Authorized By Anbu");
});

spanEl.addEventListener("click", function () {
  alert("Authorized By Trisha");
});
