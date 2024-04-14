// array to store the tasks
let tasks = [];

const renderTasks = () => {
  let taskList = document.getElementById('tasklist');
  taskList.innerHTML = '' 
  

  tasks.forEach((task, index)=> {
    const li = document.createElement('li');
    li.textContent = task.name;
    const btn = document.createElement('button');
    btn.innerHTML = '<div>delete</div>';
    btn.className = 'delete-button';
    btn.onclick = () => deleteTask(index);

    li.appendChild(btn);
    taskList.appendChild(li);
  });
  
};

const addTask = () => {
  const name = document.getElementById('taskinput');
  if (name!== '') {
    const task = {
      name:name.value,
      date:new Date()
    }
    tasks.push(task);
    renderTasks(); 
  }
}

const deleteTask = (index)=>{

  tasks.splice(index, 1);
  renderTasks();
}

const clearAllTasks =()=> {
  tasks =[];
  renderTasks();

}

const countTasks = ()=>{
   alert("tatoal number of tasks is:" + tasks.length)
}
