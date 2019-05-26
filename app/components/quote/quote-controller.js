import QuoteService from "./quote-service.js";

//private
let _quoteService = new QuoteService()

function _drawQuote() {
  console.log("quote hsould be:", _quoteService.Quote)
  let quote = _quoteService.Quote
  let template = quote.Template
  document.getElementById('quote').innerHTML = template
}


//public
export default class QuoteController {
  constructor() {
    _quoteService.addSubscriber('quote', _drawQuote)
    _quoteService.getQuote()
  }
}
