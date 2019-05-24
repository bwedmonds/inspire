export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
  }

  getTemplate() {
    return `
  <div class="form-check">
      <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
        <label class="form-check-label ${this.completed ? 'strikethrough' : ''}">
          ${this.description}
        </label>
        <span onclick="app.controllers.todoController.removeTodo('${this._id}')">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>`

    //build one up there
  }
}




  // //the server will create these properties for you
  // _id: { type: String, required: true, unique: true }
  // completed: { type: Boolean, required: true, default: false },
  // user: { type: String, required: true },
  // //You will need to provide a description
  // description: { type: String, required: true },
