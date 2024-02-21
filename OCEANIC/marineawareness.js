let currentImage = 0;
const imageBoxes = document.querySelectorAll('.box > div');

function showImage(index) {
    imageBoxes.forEach(box => box.style.display = 'none');
    imageBoxes[index].style.display = 'block';
}

function nextImage() {
    currentImage = (currentImage + 1) % imageBoxes.length;
    showImage(currentImage);
}

// Change slide every 3 seconds (adjust as needed)
setInterval(nextImage, 5000);

// Show the first image initially
showImage(currentImage);




