import queryParams from "./../../../utils/queryParams";

const myName = document.querySelector('.avatar').title;

const updateTodo = () => {
  const assignedTodoElements = document.getElementsByClassName('todo__assignee');

  const filter = queryParams.get('filter');

  Array.from(assignedTodoElements).forEach((assignedTodoElement) => {
    let todoElement = assignedTodoElement.closest(".todo");

    if (filter === 'unassigned') {
      todoElement.className += ' todo--hide';
      return;
    }

    const assignedToMe = todoElement.innerHTML.indexOf(myName);

    if (assignedToMe !== -1) {
        todoElement.className += ' todo--mine';
        return;
    }

    todoElement.className += ' todo--assigned';
  });
}

module.exports = updateTodo;
