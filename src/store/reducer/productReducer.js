import { LINK } from "../link/link";

const initialState = {};

const ADD_PRODUCT_ITEM = "ADD_PRODUCT_ITEM";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ITEM:
      return {...action.payload
      };
    default:
      return state;
  }
};

export const addProductItemAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${LINK}/products/${payload}`);
      const data = await response.json();
      dispatch({
        type: ADD_PRODUCT_ITEM,
        payload: data,
      });
    } catch (error) {
      console.error("Error during data retrieval", error);
    }
  };
};
