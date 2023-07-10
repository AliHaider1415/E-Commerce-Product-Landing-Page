
// Functionality for selecting the product images
let other_img = document.querySelectorAll(".other_img");

other_img.forEach(function(img) {
  img.addEventListener("click", function() {
    let product_img = document.getElementById("product_img");
    let other_img_src = img.getAttribute("src");
    product_img.setAttribute("src", other_img_src);
  });
});

// Functionality for incrementing and decrementing the quantity of the product

let increase_item_btn = document.getElementById("Add")
let subtract_btn = document.getElementById("Subtract")
let count_val = document.getElementById("count_val")
increase_item_btn.addEventListener("click",function(){
  count_val.value++;
})
subtract_btn.addEventListener("click",function(){
  count_val.value--;
})

// Functionality to add items to the cart_btn

let content_container = document.getElementById("content_container");
let add_item_btn = document.getElementById("add_btn")
add_btn.addEventListener("click",function(){
 
  let html = `
  <div class="cart_content">
  <img class = "cart_product_img" src="images/image-product-1.jpg" style = "vertical-align:top;width: 15%; display: inline-block; border-radius: 5px;">

    <div class="content_desc">
    <p class="title">Fall Limited Edition Sneakers</p>
    <p class ="totalprice">$125.00 x ${count_val.value} = ${125 * count_val.value}</p>

  </div>
  <button class = "delete_btn"><img src="images/icon-delete.svg"></button>
</div>
`;

  content_container.innerHTML += html; 
  count_val.value = 1;
  // Functionality to delete the item from the cart_btn
let delete_btns = document.getElementsByClassName("delete_btn");
Array.from(delete_btns).forEach(function(btn) {
  btn.addEventListener("click", function() {
    let cartContent = this.parentElement;
    cartContent.remove();
  });
});
})

// Functionality for opening and hiding the cart_btn
let cart_btn = document.getElementById("cart_btn");
let cart_expand = document.getElementById("cart_expand");

cart_btn.addEventListener("click", function() {
  console.log("hey");
  if (cart_expand.style.display === "none") {
    
    cart_expand.style.display = "block";
  } else {
    cart_expand.style.display = "none";
  }
});

// Functionalty to open sidebar in mobile devices
let menu_btn = document.getElementById("menu_btn");
let sliding_bar = document.getElementById("sliding_bar");

menu_btn.addEventListener("click", function() {
    sliding_bar.style.display = "block";
});
// Functionality to close the sidebar
let cross_btn = document.getElementById("cross_btn");
cross_btn.addEventListener("click", function() {
  sliding_bar.style.display = "none";
})

// Functionality for the carousel
// Get the necessary elements
const carousel = document.getElementById("carousel");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const productImg = document.getElementById("product_img");

// Define an array of image URLs for the carousel
const imageUrls = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg"
];

// Set the initial image index
let currentImageIndex = 0;

// Function to display the current image
function showCurrentImage() {
  const imageUrl = imageUrls[currentImageIndex];
  productImg.src = imageUrl;
}

// Event listener for the previous button
previousBtn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  showCurrentImage();
});

// Event listener for the next button
nextBtn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  showCurrentImage();
});

// Show the initial image
showCurrentImage();


