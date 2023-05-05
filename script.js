const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const text = input.value.trim();
  if (text !== '') {
    addItem(text);
  }
  input.value = '';
});

function addItem(text) {
  const item = document.createElement('li');
  item.innerText = text;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      item.classList.add('completed');
    } else {
      item.classList.remove('completed');
    }
  });
  item.appendChild(checkbox);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    item.remove();
  });
  item.appendChild(deleteButton);
  list.appendChild(item);
}