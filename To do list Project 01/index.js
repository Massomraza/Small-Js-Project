document.querySelector('#push').onclick = () => {
    if (document.querySelector('#newTask input').value.length == 0) {
        alert('Please Enter the task')
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id = "taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                <i class="fa-light fa-trash-can"></i>
                </button>
            </div>
        `;
    }
    var current_task = document.querySelectorAll('.delete');

    for(let i = 0; i < current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    var tasks = document.querySelectorAll('.task');
    
    for(let i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    document.querySelector('#newTask input').value = "";
}