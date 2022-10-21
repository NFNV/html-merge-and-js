//picking up navbar email
const menuEmail = document.querySelector(".navbar-email")
//picking up desktop menu
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
//toggling visible/invisible the "inactive" class
const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle("inactive")
}
//when the click event on menuEmail ('.navbar-email') occurs, execute toggleDesktopMenu function
menuEmail.addEventListener("click", toggleDesktopMenu)

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("inactive")
}

menuHamIcon.addEventListener("click", toggleMobileMenu)

const toggleCartMenu = () => {
    aside.classList.toggle("inactive")
}

menuCartIcon.addEventListener("click", toggleCartMenu)