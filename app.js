// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all events listeners 
loadEventListeners();


function loadEventListeners() {
  // add task events
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}


function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');

  li.className = 'collection-item';
  //Create text node and appendto the li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  

  taskList.appendChild(li);

  //clear input
  taskInput.value = '';


  e.preventDefault();
}


//Remove Task

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
   if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

    }
  }
}

//Clear Tasks

function clearTasks() {
  if(confirm('Remove all tasks?')) {
    // taskList.innerHTML = '';
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  });

}