 // Get the elements
 const popupImage = document.getElementById('popupImage');
 const imagePopup = document.getElementById('imagePopup');
 const closePopup = document.getElementById('closePopup');

 // Function to show the popup
 function showPopup() {
     imagePopup.style.display = 'flex';
 }

 // Function to close the popup
 function closePopupFn() {
     imagePopup.style.display = 'none';
 }

 // Event listeners
 popupImage.addEventListener('click', showPopup);
 closePopup.addEventListener('click', closePopupFn);

 // Close popup when clicking outside the content
 window.addEventListener('click', function(e) {
     if (e.target === imagePopup) {
         closePopupFn();
     }
 });


 ///////////////


 const carouselTrack = document.querySelector('.carousel-track');
 const images = document.querySelectorAll('.carousel-image');
 const prevButton = document.getElementById('prevButton');
 const nextButton = document.getElementById('nextButton');
 const modal = document.getElementById('modal');
 const modalImage = document.getElementById('modalImage');
 const closeButton = document.getElementById('closeButton');
 
 let currentIndex = 0;
 const imageWidth = images[0].clientWidth;

 function updateCarousel() {
     const offset = -currentIndex * imageWidth;
     carouselTrack.style.transform = `translateX(${offset}px)`;
 }

 function nextImage() {
     currentIndex = (currentIndex + 1) % images.length;
     updateCarousel();
 }

 function prevImage() {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     updateCarousel();
 }

 images.forEach((image, index) => {
     image.addEventListener('click', () => {
         modal.style.display = 'flex';
         modalImage.src = image.src;
     });
 });

 closeButton.addEventListener('click', () => {
     modal.style.display = 'none';
 });

 nextButton.addEventListener('click', nextImage);
 prevButton.addEventListener('click', prevImage);

//  setInterval(nextImage, 3000); // Auto-scroll every 3 seconds