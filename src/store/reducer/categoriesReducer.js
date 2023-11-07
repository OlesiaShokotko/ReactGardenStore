const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";


export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};


export const fetchCategoriesRequestAction = (payload) => ({
  type: FETCH_CATEGORIES_REQUEST,
  payload,
});

export const fetchCategoriesSuccessAction = (payload) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailureAction = (payload) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});
