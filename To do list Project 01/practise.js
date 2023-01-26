document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value == 0){
        alert('Please Enter New Task');
    }else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskList">
                ${document.querySelector('#newTask input').value}
                </span>
                <button id="delete">Delete</button>
            </div>
        `;
    }

    var current_task = document.querySelectorAll('#delete');

    for(let i = 0; i < current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove()
        }
    }

    var taskToggel = document.querySelectorAll('.task span');

    for(let i = 0; i < taskToggel.length; i++){
        taskToggel[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    document.querySelector('#newTask input').value = '';
}