const currentLocation = window.location.href;
const navLinks = document.querySelectorAll(".navLinkItem");

checkActiveLink();
function checkActiveLink(){
    navLinks.forEach((activeLink)=>{
        
        if(activeLink.href === currentLocation){
            activeLink.setAttribute('aria-current', 'page');
            console.log(activeLink.href);
        }
    })
}

// console.log(window.location.href);
