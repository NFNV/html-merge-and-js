//picking up/importing navbar email, desktop menu, ham icon, cart icon, product detail & cards container
const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")

//toggling visible/invisible the "inactive" class
//each time we click on desktop menu, cart(aside) will close
const toggleDesktopMenu = () => {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")

  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive")
  }
  desktopMenu.classList.toggle("inactive")
}
//when the click event on menuEmail ('.navbar-email') occurs, execute toggleDesktopMenu function
menuEmail.addEventListener("click", toggleDesktopMenu)

//each time we click on mobile menu, cart(aside) will close
const toggleMobileMenu = () => {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")

  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive")
  }

  mobileMenu.classList.toggle("inactive")
}

menuHamIcon.addEventListener("click", toggleMobileMenu)

//each time we click on cart(shoppingCartContainer), mobile menu & desktop menu will close
const toggleCartMenu = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive")
  }

  shoppingCartContainer.classList.toggle("inactive")
}

menuCartIcon.addEventListener("click", toggleCartMenu)

//products will be hardcoded here
//array of objects, products inside
const productList = []
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Monitor",
  price: 500,
  image:
    "https://static-geektopia.com/storage/t/i/673/67352/aw2720hf_front-view_678_6.webp",
})
productList.push({
  name: "Laptop",
  price: 1000,
  image: "https://cryptoavisos.com/oc-content/uploads/75/29883.webp",
})

//for of within a function
const renderProducts = (arr) => {
  //iterating & creating elements
  for (const product of arr) {
    // creating a div
    const productCard = document.createElement("div")
    // adding "product-card" to that div's class
    productCard.classList.add("product-card")
    //creating img element
    const productImg = document.createElement("img")
    //adding source
    productImg.setAttribute("src", product.image)
    //repeat
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")
    const productPrice = document.createElement("p")
    productPrice.innerText = `€${product.price}`
    const productName = document.createElement("p")
    productName.innerText = product.name

    const productInfoFigure = document.createElement("figure")
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    //father & children nodes
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    productInfoFigure.appendChild(productImgCart)

    cardsContainer.appendChild(productCard)
  }
}
//call the function
renderProducts(productList)
