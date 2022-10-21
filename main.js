//picking up navbar email
const menuEmail = document.querySelector(".navbar-email")
//picking up desktop menu
const desktopMenu = document.querySelector(".desktop-menu")
//toggling visible/invisible the "inactive" class
const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle("inactive")
}
//when the click event on menuEmail ('.navbar-email') occurs, execute toggleDesktopMenu function
menuEmail.addEventListener("click", toggleDesktopMenu)
