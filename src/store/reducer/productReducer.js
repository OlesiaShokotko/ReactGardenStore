const initialState = {
  data: {},
  isLoading: false
}

const LOADING_PRODUCT_ITEM = "LOADING_PRODUCT_ITEM";
const ADD_PRODUCT_ITEM = "ADD_PRODUCT_ITEM";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRODUCT_ITEM:
      return {
        ...state,
        isLoading: action.payload
      };
    case ADD_PRODUCT_ITEM:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export const addProductItemAction = (payload) => ({type: ADD_PRODUCT_ITEM, payload})
export const loadingProductItemAction = (payload) => ({type: LOADING_PRODUCT_ITEM, payload})


