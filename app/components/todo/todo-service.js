import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Bryce/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Todos() {
		return _state.todos
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				// WHAT DO YOU DO WITH THE RESPONSE? --see below for mine
				let data = res.data.data.map(d => new Todo(d))
				_setState('todos', data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				// WHAT DO YOU DO AFTER CREATING A NEW TODO? --see below for mine
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite --see mine below
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
		todo.completed = !todo.completed

		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS? --yes, below for mine
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId, todo) {
		// This one is on you to write.... 
		// The http method is delete at the todoId ---that should do it
		todoApi.delete(todoId, todo)
			.then(res => {
				this.getTodos()
			})
	}

}
