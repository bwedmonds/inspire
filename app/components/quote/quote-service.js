import Quote from "../../models/quote.js";

//private
// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

//public
export default class QuoteService {

}
