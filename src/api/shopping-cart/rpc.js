/** Mocking client-server processing */

import products from "@/sourceData/products/products";

export default {
  /** @param {Function} callback */
  getProducts(callback) {
    setTimeout(() => callback(products.products), 100);
  },

  /**
   * @param {[{price: number, id: number, title: string, quantity: number}]} cart
   * @param {Function} callback
   * @param {Function} errorCallback
   */
  buyProducts(cart, callback, errorCallback) {
    setTimeout(() => {
      // simulate random checkout failure
      Math.random() > 0.5 || navigator.webdriver ? callback() : errorCallback();
    }, 100);
  },
};
