import ImageService from "./image-service.js";


//private
let _imageService = new ImageService();

function _drawBG() {
  let image = _imageService.unsplashImage
  document.getElementById('bg-image').setAttribute('background', image.getTemplate())
}


//public
export default class ImageController {
  constructor() {
    //register subscribers
    _imageService.addSubscriber('unsplashImages', _drawBG)
    //get data
    _imageService.getUnsplashImage()
  }

}

