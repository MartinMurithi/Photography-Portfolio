const currentLocation = window.location.href;
const navLinks = document.querySelectorAll(".navLinkItem");
const menuIcon = document.getElementById("menuIcon");
const xIcon = document.getElementById("xIcon");
const mobileNav = document.getElementById("mobileNavListContainer");
const blurryDivs = document.querySelectorAll(".blurredImg");

checkActiveLink();
menuIcon.addEventListener("click", openNavBar);
xIcon.addEventListener("click", closeNavBar);

function checkActiveLink() {
  navLinks.forEach((activeLink) => {
    if (activeLink.href === currentLocation) {
      activeLink.setAttribute("aria-current", "page");
    }
  });
}

function openNavBar() {
  mobileNav.style.display = "block";
  menuIcon.style.display = "none";
  xIcon.style.display = "block";

  setTimeout(() => {
    mobileNav.style.opacity = "1";
  }, 10);
}

function closeNavBar() {
  mobileNav.style.opacity = "0";

  setTimeout(() => {
    mobileNav.style.display = "none";
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  }, 300);
}


blurryDivs.forEach((blurryDiv)=>{
  const img = document.querySelector("img");

  function loadImg(){
    blurryDiv.classList.add("loaded");
  }

  if(img.complete){
    loadImg();
  }else{
    img.addEventListener("load", loadImg);
  }
})