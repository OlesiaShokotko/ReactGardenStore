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

export const addProductItemAction = (payload) => ({type: ADD_PRODUCT_ITEM, payload})


