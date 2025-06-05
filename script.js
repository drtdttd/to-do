
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const activeTasksList = document.getElementById('activeTasks');
  const deletedTasksList = document.getElementById('deletedTasks');
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.task-list').forEach(list => {
        list.classList.remove('active');
      });
      document.getElementById(btn.dataset.tab + 'Tasks').classList.add('active');
    });
  });
  
  addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.length == 0) {
      return;
    } else {
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      taskItem.innerHTML = `
        <span id="taskname">${taskInput.value}</span>              
        <span class="delete-btn">
          <i class="ri-delete-bin-5-fill"></i>
        </span>
      `;
      activeTasksList.appendChild(taskItem);
      taskInput.value = '';
      
      const deleteBtn = taskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        activeTasksList.removeChild(taskItem);
        deletedTasksList.appendChild(taskItem);        
        taskItem.removeChild(deleteBtn);
      });
    }
  });
