document.querySelector('#create-todo-btn').onclick = function(){
    if (document.querySelector('#create-todo input').value.length == 0) {
        alert('Please input your todo!')
    } else {
        document.querySelector('#view-todo').innerHTML +=`
        <div class="todo-item flex justify-between">
            <p id="todo-text">
                ${document.querySelector('#create-todo input').value}
            </p>
            <button class="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            X
            </button>
        </div>
        `
        var currentTodo = document.querySelectorAll('.delete-btn');
        for (let i = 0; i < currentTodo.length; i++) {
            currentTodo[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('.pindah-tab').onclick = function(){
    var element2 = document.getElementById("tab2")
    element2.classList.remove("hidden");

    var element1 = document.getElementById("tab1")
    element1.classList.add("hidden")
}