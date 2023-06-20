var btn = document.getElementById('btn');
var modal = document.getElementById('modal-pop');
var modalPopContainer = document.getElementById('modal-pop-container');
var mainContainer = document.getElementById('main-container');
var modalContent = document.getElementById('modal-content');
var crossIcon = document.getElementById('cross-icon');

btn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.style.display = 'block';
  mainContainer.style.backgroundColor = 'red';
  mainContainer.style.opacity = 0.4;
  modalPopContainer.style.opacity = 0.7;
  modalContent.style.opacity = 0.9;
});

crossIcon.addEventListener('click', () => {
  modal.style.display = 'block';
  modalContent.style.display = 'none';
  modalPopContainer.style.opacity = 0.9;
  mainContainer.style.backgroundColor = '';
  mainContainer.style.opacity = 0.9;
  modalContent.style.opacity = 0.9;
});