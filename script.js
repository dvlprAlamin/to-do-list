function addList() {
    let input = document.getElementById('input-field');
    let todoList = document.getElementById('todo-list');
    if(input.value == ''){
        return;
    }
    let listItem = `<li> ${input.value} <span class="close-btn">✖</span> </li>`
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
    if (item.classList.value == 'close-btn') {
        item.parentElement.style.display = "none"
    }
})
