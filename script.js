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
    <button class="popup-btn cancel-btn">Cancel</button>
    </div></li>`
    // localStorage.setItem('listItem', listItem);
    // localStorage.getItem('listItem');
    todoList.innerHTML += listItem;
    input.value = '';
}

document.getElementById('input-field').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add-btn").click();
    }
});


document.getElementById('todo-list').addEventListener('click', function (event) {
    let item = event.target;
    if (item.classList.value === 'close-btn') {
        // document.getElementById('close-popup').style.display = 'block'; 
        item.nextElementSibling.style.display = 'block';       
    }
    if(item.classList.value === 'confirm-btn'){
        item.parentElement.style.display = "none";
        item.parentElement.parentElement.style.display = "none"
    }
});