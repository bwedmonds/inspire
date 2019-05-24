export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.humidity = data.main.humidity
    this.weather = data.weather[1]
    this.windSpeed = data.wind.speed
  }

  get Template() {
    return `
    <div class="card .bg-transparent">
			<div class="card-body">
				<h5 class="card-title">${this.city}</h5>
				<h5 class="card-title">Kelvin: ${this.kelvin}</h5>
				<h5 class="card-title">${this.weather}</h5>
				<h6 class="card-subtitle mb-2 text-muted">Humidity: ${this.humidity} - Wind Speed: ${this.windSpeed}</h6>
			</div>
		</div>
  `
  }
}