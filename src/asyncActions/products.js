import { LINK } from "../store/link/link"
import { addNewProductsListAction, loadingProductsList } from "../store/reducer/productsReducer"


const URL = `${LINK}/products/all`


export const fetchProductsList = () => {
    return function (dispatch) {
        dispatch(loadingProductsList(true))
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch(addNewProductsListAction(data));
                dispatch(loadingProductsList(false));
            })
            .catch((error) => {
                console.error('Произошла ошибка при получении данных:', error);
            });
    }
}