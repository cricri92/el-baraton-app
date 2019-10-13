import { categories } from 'datasource/categories';

class CategoriesService {
    /**
     * Returns all existing categories
     * @returns {Promise<array>}
     */
    fetchAllCategories() {
        return new Promise((resolve, reject) => resolve(categories));
    }


    /**
     * Returns top (three by default) categories
     * @param top
     * @returns {Promise<array>}
     */
    fetchTopThreeCategories(top = 3) {
        return new Promise((resolve, reject) => {
            resolve(categories.slice(0, top))
        })
    }
}

export default CategoriesService