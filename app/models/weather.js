export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = (data.main.temp - 273.15).toFixed(2)
    this.farenheit = (1.8 * (data.main.temp - 273) + 32).toFixed(2)
    this.humidity = data.main.humidity
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.windSpeed = data.wind.speed
  }

  get Template() {
    return `
    <div class="card bg-dark">
			<div class="card-body">
				<h5 class="card-title">${this.city}</h5>
        <h5 class="card-title">Kelvin: ${this.kelvin}</h5>
        <h5 class="card-title">Celcius: ${this.celcius}</h5>
        <h5 class="card-title">Farenheit: ${this.farenheit}</h5>
        <h5 class="card-title">${this.description}</h5>
        <img src="http://openweathermap.org/img/w/${this.icon}.png" alt="">
        <h6 class="card-subtitle mb-2">Humidity: ${this.humidity}</h6>
        <h6 class="card-subtitle mb-2">Wind Speed: ${this.windSpeed}</h6>

			</div>
		</div>
  `
  }
}