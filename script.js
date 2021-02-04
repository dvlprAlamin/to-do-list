// add list item function
function addList() {
    let input = document.getElementById('input-field');
    let todoList = document.getElementById('todo-list');
    if (input.value === '') {
        return;
    }
    let listItem = `<li> ${input.value} <span class="close-btn">✖</span> 
    <div id="close-popup">
    <h3>Are you sure to delete this item?</h3>
    <button class="confirm-btn">Confirm</button>
    <button class="cancel-btn">Cancel</button>
    </div></li>`
    todoList.innerHTML += listItem;
    input.value = '';
    setLocalStorage(listItem);
}


// showing added list item on browser
let getData = JSON.parse(localStorage.getItem('listItem'));
document.getElementById('todo-list').innerHTML = getData.join('');


// enter key event handler
document.getElementById('input-field').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add-btn").click();
    }
});


// delete, confirm, cancel button event handler
document.getElementById('todo-list').addEventListener('click', function (event) {
    let item = event.target;
    if (item.classList.value === 'close-btn') {
        item.nextElementSibling.style.display = 'block';
        // finding index of list item which need to remove from local storage
        let child = item.parentElement;
        let i = 0;
        while ((child = child.previousSibling) != null)
            i++;
        // delete selected list item from local storage
        let fetchedData = JSON.parse(localStorage.getItem("listItem"));
        fetchedData.splice(i, 1);
        localStorage.setItem('listItem', JSON.stringify(fetchedData));
    }
    if (item.classList.value === 'confirm-btn') {
        item.parentElement.style.display = "none";
        item.parentElement.parentElement.style.display = "none"
    }
    if (item.classList.value === 'cancel-btn') {
        item.parentElement.style.display = "none";
    }
});


// set list item to local storage 
function setLocalStorage(data) {
    let availableData = localStorage.getItem('listItem');
    if (availableData === null) {
        localStorage.setItem('listItem', JSON.stringify([data]));
    }
    else {
        fetchedData = JSON.parse(availableData);
        fetchedData.push(data);
        localStorage.setItem('listItem', JSON.stringify(fetchedData));

    }
};
