import { LINK } from "../store/link/link";
import {
  addProductItemAction,
  loadingProductItemAction,
} from "../store/reducer/productReducer";

export const fetchProductItemAction = (payload) => {
  return async (dispatch) => {
    dispatch(loadingProductItemAction(true));
    try {
      const response = await fetch(`${LINK}/products/${payload}`);
      const data = await response.json();
      dispatch(addProductItemAction(data));
      dispatch(loadingProductItemAction(false));
    } catch (error) {
      console.error("Error during data retrieval", error);
    }
  };
};
