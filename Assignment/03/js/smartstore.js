let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function dropdownBtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//

const price = 730000;
var quantity_value = 0;
var total = 0;

function plusQuantity() {
  quantity_value = parseInt(quantity.value) + 1;
  document.getElementById("quantity").value = quantity_value;
}

function minusQuantity() {
  quantity_value = parseInt(quantity.value) - 1;
  if (quantity.value <= 1) {
    quantity_value = 1;
  }
  document.getElementById("quantity").value = quantity_value;
}

function setTotalQuantity() {
  //total += parseInt(quantity.value);
  total = parseInt(quantity.value);
  document.getElementById("total-quantity").innerHTML = total;
}

function setTotalPrice() {
  document.getElementById("total-price").innerHTML = parseInt(document.getElementById("total-quantity").innerHTML) * 730000;
}
