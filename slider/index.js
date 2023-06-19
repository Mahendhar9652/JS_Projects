const images = ['download1.jpg', 'download2.jpg', 'download3.jpg', 'download4.jpg', 'download6.jpg', 'images (1).jpg', 'images.jpg', 'images (2).jpg'];
var buttonContainer = document.getElementsByClassName('button-container')[0];
var nextImageButton = document.getElementById('next');
var prevImageButton = document.getElementById('prev');
var imageSrc = document.getElementById('image');
var text =document.getElementById('text')
var count = 0;

text.innerText=count;

nextImageButton.addEventListener('click', () => {
  count++;
  text.innerText=count;
  if (count >= images.length) {
    count = 0;
  }
  if (count > 0) {
    prevImageButton.style.display = 'block';
    prevImageButton.addEventListener('click', prevImage);
  }
  imageSrc.src = images[count];
});

function prevImage() {
  count--;
  text.innerText=count;
  if (count < 0) {
    count = images.length - 1;
  }
  imageSrc.src = images[count];
}

prevImageButton.addEventListener('click', prevImage);
prevImageButton.style.display = 'none';
