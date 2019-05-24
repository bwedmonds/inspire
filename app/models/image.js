export default class Image {
  constructor(data) {
    this.large_url = data.large_url
  }


  getTemplate() {
    return `${this.large_url}`
  }
}