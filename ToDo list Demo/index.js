document.getElementById('add-task').addEventListener('click',function(){
    const taskInput =
    document.getElementById('new-task');
    const taskText =
    taskInput.value.trim();

    if (taskText !== '') {
        const taskItem =
        document.createElement('li');
        taskItem.textContent = taskText;

     

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
        taskItem.remove();
    });


    taskItem.appendChild(deleteButton);
    document.getElementById('tasks-list').appendChild(taskItem);
    taskInput.value='';
}
});




