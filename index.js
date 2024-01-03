const currentLocation = window.location.href;
const navLinks = document.querySelectorAll(".navLinkItem");
const menuIcon = document.getElementById("menuIcon");
const xIcon = document.getElementById("xIcon");

checkActiveLink();
function checkActiveLink() {
  navLinks.forEach((activeLink) => {
    if (activeLink.href === currentLocation) {
      activeLink.setAttribute("aria-current", "page");
      console.log(activeLink.href);
    }
  });
}

const mobileNav = document.getElementById("mobileNavListContainer");

// scrollContainer.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     scrollContainer.style.scrollBehavior = 'smooth';
//     scrollContainer.scrollLeft += e.deltaY;
// });

menuIcon.addEventListener("click", () => {
  mobileNav.style.display = "block";
  menuIcon.style.display = "none";
  xIcon.style.display = "block";

  setTimeout(() => {
    mobileNav.style.opacity = "1";
  }, 10);
});

xIcon.addEventListener("click", () => {
  mobileNav.style.opacity = "0";

  setTimeout(() => {
    mobileNav.style.display = "none";
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  }, 300);
});
