import { LINK } from "../store/link/link";
import { addProductItemAction } from "../store/reducer/productReducer";


export const fetchProductItemAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${LINK}/products/${payload}`);
      const data = await response.json();
      dispatch(addProductItemAction(data))
    } catch (error) {
      console.error("Error during data retrieval", error);
    }
  };
};
