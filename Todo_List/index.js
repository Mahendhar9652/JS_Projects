var inputText = document.getElementById('text');
var button = document.getElementById('submit-btn');
var display = document.getElementById('display');
var alertMsg = document.querySelector('.alert');
var list = [];
list = JSON.parse(localStorage.getItem('items')) || [];

// Displaying content
function renderList() {
  display.innerHTML = '';
  if (list.length > 0) {
    list.forEach(function (element, index) {
      display.innerHTML += `
        <li class="list-item">
          <span class="list-item-text">${element.text}</span>
          <div class="list-item-actions">
            <i class="fas fa-edit update-icon" value="${index}"></i>
            <i class="far fa-trash-alt delete-icon" value="${index}"></i>
          </div>
        </li>
      `;
    });
    display.innerHTML += `<button id="clear" class="button">Clear All</button>`;
  } else {
    display.innerHTML = '<li class="list-item">No items</li>';
  }
}

renderList();

// Clear function
var clear = document.getElementById('clear');
if (list.length > 0) {
  clear.addEventListener('click', () => {
    localStorage.removeItem('items');
    alertMsg.textContent = 'Removed Items';
    list = [];
    renderList();
  });
}

// Add function
button.addEventListener('click', addItem);

function addItem() {
  var text = inputText.value;
  var newItem = { text: text };
  list.push(newItem);
  localStorage.setItem('items', JSON.stringify(list));
  alertMsg.textContent = 'Added Item';
  renderList();
  inputText.value = '';
}

// Delete function
var deleteIcons = document.querySelectorAll('.delete-icon');

deleteIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    var indexValue = e.target.getAttribute('value');
    list.splice(indexValue, 1);
    localStorage.setItem('items', JSON.stringify(list));
    alertMsg.textContent = 'Deleted Item';
    renderList();
  });
});

// Update function
var updateIcons = document.querySelectorAll('.update-icon');

updateIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    var indexValue = e.target.getAttribute('value');
    button.innerText='Edit'
    var currentItem = list[indexValue];
    inputText.value = currentItem.text;

    button.removeEventListener('click', addItem);
    button.addEventListener('click', updateItem);

    function updateItem() {
      var updatedText = inputText.value;
      list[indexValue].text = updatedText;
      localStorage.setItem('items', JSON.stringify(list));
      alertMsg.textContent = 'Updated Item';
      renderList();
      inputText.value = '';
      button.removeEventListener('click', updateItem);
      button.addEventListener('click', addItem);
      button.innerText='Add'
    }
  });
});