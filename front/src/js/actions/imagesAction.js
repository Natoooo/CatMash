export const IMAGES_RECEIVED = "IMAGES_RECEIVED"

export function imagesReceived(images) {
  return {
    type: IMAGES_RECEIVED,
    payload: {
      images
    }
  }
}
