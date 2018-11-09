import { images } from "./fixtures"

class Db {
  getImages(id, url) {
    return images
  }
}

export const db = new Db()
