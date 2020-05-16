function disappear() {
  var mobileNav = document.getElementById("mobile-nav");
  var close = document.getElementById("close");
  var hamburger = document.getElementById("hamburger");
  mobileNav.style.display = "none";
  close.style.display = "none";
  hamburger.style.display = "block";
}
function appear() {
  var mobileNav = document.getElementById("mobile-nav");
  var hamburger = document.getElementById("hamburger");
  var close = document.getElementById("close");
  mobileNav.style.display = "block";
  hamburger.style.display = "none";
  close.style.display = "block";
}
