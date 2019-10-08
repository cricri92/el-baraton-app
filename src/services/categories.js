import categories from 'datasource/categories';

class CategoriesService {
    fetchAllCategories() {
        return new Promise((resolve, reject) => resolve(categories));
    }
}

export default CategoriesService