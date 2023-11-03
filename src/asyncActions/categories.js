import { LINK } from "../store/link/link"
import { addNewCategoriesListAction } from "../store/reducer/categoriesReducer"

const URL = `${LINK}/categories/all`

export const fetchAllCategories = () => {
    return function (dispatch) {
        fetch(URL)
            .then(res => res.json())
            .then(data => dispatch(addNewCategoriesListAction(data)))
            .catch((error) => {
                console.error('Произошла ошибка при получении данных:', error);
            });
    }
}

