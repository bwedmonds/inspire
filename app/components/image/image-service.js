import Image from "../../models/image.js";

//private
// @ts-ignore
let _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	unsplashImages: []
}

let _subscribers = {
	unsplashImages: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}



//public
export default class ImageService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get unsplashImage() {
		return _state.unsplashImages
	}

	getUnsplashImage() {
		_imgApi.get()
			.then(res => {
				// console.log(res)
				if (res.data.large_url == null) {
					console.log("re-getting image")
					return this.getUnsplashImage()
				}
				let data = new Image(res.data)
				_setState('unsplashImages', data)
			})
			.catch(err => {
				console.error(err)
			})
	}

}
