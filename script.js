const shoppingList = document.querySelector('#shoppingList');

const inputField = document.querySelector('input');

const addBtn = document.querySelector('#input-btn');

console.log(addBtn, inputField, shoppingList);

function addItem(e) {
    const listItem = document.createElement('li');
    listItem.textContent = inputField.value;
    inputField.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', ()=> deleteBtn.parentNode.remove());

    listItem.appendChild(deleteBtn);

    shoppingList.appendChild(listItem);
    e.preventDefault();
    
}

addBtn.addEventListener('click', addItem);