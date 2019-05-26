import Quote from "../../models/quote.js";

//private
// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}



//public
export default class QuoteService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Quote() {
		return _state.quote
	}

	getQuote() {
		_quoteApi.get()
			.then(res => {
				console.log(res)
				_setState('quote', new Quote(res.data))
			})
			.catch(err => {
				console.error(err)
			})
	}
}
