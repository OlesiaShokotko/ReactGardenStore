import { LINK } from "../store/link/link"
import { addNewCategoriesListAction, fetchCategoriesFailureAction, fetchCategoriesRequestAction, fetchCategoriesSuccessAction, loadingCategoriesListAction } from "../store/reducer/categoriesReducer"

const URL = `${LINK}/categories/all`

export const fetchAllCategoriesAction = () => {
    return function (dispatch) {
        dispatch(fetchCategoriesRequestAction(true))
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchCategoriesSuccessAction(data))
                dispatch(fetchCategoriesRequestAction(false))
            })
            .catch((error) => {
                fetchCategoriesFailureAction(error)
            });
    }
}

