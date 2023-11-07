import { LINK } from "../store/link/link"
import { fetchProductsFailureAction, fetchProductsRequestAction, fetchProductsSuccessAction } from "../store/reducer/productsListReducer"


const URL = `${LINK}/products/all`


export const fetchProductsListAction = () => {
    return function (dispatch) {
        dispatch(fetchProductsRequestAction(true))
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchProductsSuccessAction(data));
                dispatch(fetchProductsRequestAction(false));
            })
            .catch((error) => {
                dispatch(fetchProductsFailureAction(error))
            });
    }
}