export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);
    this.quote = data.quote.body
    this.author = data.quote.author
  }


  get Template() {
    return `
    <div class="col-3">
				<h2>Today's Quote:</h2>
				<h2>${this.quote}</h2>
          <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="${this.author}">Author:</button>
        </div>
        `
  }
}