import TodoService from "./todo-service.js";

let _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let todos = _todoService.Todos
	let incomplete = 0
	let template = ''

	todos.forEach(todo => {
		if (!todo.completed) {
			incomplete++
		}
		template += todo.getTemplate()
	})

	template += `<h5>Things left: ${incomplete}</h5>`
	document.getElementById("todos").innerHTML = template;
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT ---that should do it below
			description: form.description.value,
		}
		form.reset()
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
