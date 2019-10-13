import { products } from 'datasource/products';

class ProductsService {
    /**
     * Returns all registered products
     * @returns {Promise<array>}
     */
    fetchAllProducts() {
        return new Promise((resolve, reject) => resolve(products));
    }

    /**
     * Returns most affordable products
     * @param top
     * @returns {Promise<array>}
     */
    fetchMostAffordableProducts(top = 3) {
        return new Promise((resolve, reject) =>
          resolve(
            products.sort(
              (a, b) =>
                parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''))
            ).filter(
              product => product.available
            ).slice(0, top)
          )
        )
    }

    fetchTopProducts(top = 3) {
        return new Promise((resolve, reject) =>
          resolve(
            products.filter(
              product => product.available
            ).slice(0, top)
          )
        )
    }
}

export default ProductsService