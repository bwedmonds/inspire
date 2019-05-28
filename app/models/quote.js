export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);
    this.quote = data.quote.body
    this.author = data.quote.author
  }


  get Template() {
    return `
    <div class="col-12">
    <a href="#" style="color: white;text-decoration: none">Who <i class="far fa-comment"></i>/<i class="fas fa-pen-fancy"></i> it?<span> ${this.author}</span></a>
				<h2>${this.quote}</h2>
        </div>
        `
  }
}