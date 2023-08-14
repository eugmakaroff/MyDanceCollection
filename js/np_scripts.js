/* fotogallery full screen opened by clicking on the photos */
const openGalleryBtn = document.getElementById('openGalleryBtn');
const galleryContainer = document.getElementById('galleryContainer');
const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const closeButton = document.getElementById('closeButton');

let currentImageIndex = 0;

function showGallery() {
  galleryContainer.style.display = 'block';
  showImage(currentImageIndex);
}

function closeGallery() {
  galleryContainer.style.display = 'none';
}

function showImage(index) {
  const images = gallery.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[index].classList.add('active');
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % gallery.childElementCount;
  showImage(currentImageIndex);
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + gallery.childElementCount) % gallery.childElementCount;
  showImage(currentImageIndex);
}

openGalleryBtn.addEventListener('click', showGallery);
closeButton.addEventListener('click', closeGallery);
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

let touchStartX = 0;
let touchEndX = 0;

gallery.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

gallery.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    showNextImage();
  } else if (touchEndX > touchStartX) {
    showPrevImage();
  }
}






/* zal galery pc_version */
let slideIndex = 0;
    let timeoutId = null;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    showSlides();
    function currentSlide(index) {
    slideIndex = index;
    showSlides();
    }
    function plusSlides(step) {

    if (step < 0) {
        slideIndex -= 2;

        if (slideIndex < 0) {
        slideIndex = slides.length - 1;
        }
    }

    showSlides();
    }
    function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}