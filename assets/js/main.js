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
console.log(menuitem);
menuitem.map((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");
    getSiblings(el).map((item) => {
      item.classList.remove("active");
    });
  });
});
