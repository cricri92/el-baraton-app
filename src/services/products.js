import products from 'datasource/products';

class ProductsService {
    fetchAllProducts() {
        return new Promise((resolve, reject) => resolve(products));
    }
}

export default ProductsService