import products from 'datasource/products';

class ProductsService {
    fetchAllProducts() {
        return new Promise((resolve, reject) => resolve(products.products));
    }
}

export default ProductsService