import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";


// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App();