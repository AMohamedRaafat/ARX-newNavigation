new WOW().init();
var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};
var menu = document.querySelectorAll("#navigation ul li ");
var menuitem = Array.from(menu);
menuitem.map((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");
    getSiblings(el).map((item) => {
      item.classList.remove("active");
    });
  });
});
var video = document.getElementById("drone");
window.onload = () => {
  video.play();
};
var toggler = document.getElementsByClassName("navbar-toggler");
var togglerElement = Array.from(toggler);
console.log(togglerElement);
togglerElement.onclick = (e) => {
  e.preventDefault();
};
function fixedNavbar() {
  console.log("Clicked to toggle");
  var navElement = document.getElementById("navbarContent");
  navElement.classList.toggle("fixed-nav");
}
var closeNav = document.getElementById("closeNav");
closeNav.onclick = (e) => {
  var navElement = document.getElementById("navbarContent");
  navElement.classList.remove("fixed-nav");
};
