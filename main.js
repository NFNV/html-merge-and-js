//picking up navbar email
const menuEmail = document.querySelector(".navbar-email")

//picking up desktop menu
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

//toggling visible/invisible the "inactive" class
//each time we click on desktop menu, cart(aside) will close
const toggleDesktopMenu = () => {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}
//when the click event on menuEmail ('.navbar-email') occurs, execute toggleDesktopMenu function
menuEmail.addEventListener("click", toggleDesktopMenu)

//each time we click on mobile menu, cart(aside) will close
const toggleMobileMenu = () => {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

menuHamIcon.addEventListener("click", toggleMobileMenu)

//each time we click on cart(aside), mobile menu will close
const toggleCartMenu = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}

menuCartIcon.addEventListener("click", toggleCartMenu)
