// Array.prototype.some()

// accepts a function as its first parameter
// some returns true or false

// eg
var items = [1, 2, 3, 4, 5];
var hasThree = items.some(x => x === 3);

console.log(hasThree);
// logs true as it is true that items contains 3

// practical example
var tasks = [
  {
    title: 'Do laundry',
    completed true
  },
  {
    title: 'Feed the cat',
    completed: false
  },
  {
    title: 'Watch the array lessons on egghead.io',
    completed: true
  }
];

// checking for duplicates
function addTasks(title) {
  if (tasks.some(task => task.title === title)) {
    return;
  }
  tasks.push({title: title, completed: false});
}

addTask('Feed the cat');

// when addTask is run initially checks to see if
// the new task matches any of the current tasks
// if true, function will break early and not add it
// else it will add the new task to the task list 

var list = document.querySelector('.task-list');
list.classList.add(
  tasks.some(task => task.completed === false)
    ? 'task-list---uncompleted'
    : 'task-list--completed'
);

// finds an element called task-list
// if all tasks are completed, add task-list--uncompleted class
// else add task-list--completed class

list.innerHTML = tasks
  .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
  .map(x => `<li>${x}</li>`)
  .join('');

// wrap all tasks in a list item element
// if task is completed, also add a strike through element
