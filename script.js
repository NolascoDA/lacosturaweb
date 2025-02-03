
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}



// script.js
function toggleMenu(selectedItem) {
  // Check if the selected item is already active
  const isActive = selectedItem.classList.contains('active');

  // Hide all menu items except the selected one
  document.querySelectorAll('.menu-item').forEach(item => {
      if (item !== selectedItem) {
          item.style.display = isActive ? 'block' : 'none'; // Show all if the selected item is active, otherwise hide
      }
  });

  // Toggle the 'active' class on the selected item
  selectedItem.classList.toggle('active');

  // If the selected item is active, ensure it's displayed
  if (selectedItem.classList.contains('active')) {
      selectedItem.style.display = 'block';
  }
}
