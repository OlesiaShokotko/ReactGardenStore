export const SEND_REQUEST = "SEND_REQUEST";
export const SEND_SUCCESS = "SEND_SUCCESS";
export const SEND_FAILURE = "SEND_FAILURE";

const initialState = {
  loading: false,
  success: false,
  error: null,
  discountApplied: false,
};
export const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        discountApplied: true,
        error: null,
      };

    case SEND_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        discountApplied: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const sendRequestAction = () => ({ type: SEND_REQUEST });
export const sendSuccessAction = () => ({ type: SEND_SUCCESS });
export const sendFailureAction = (error) => ({ type: SEND_FAILURE, payload: error });
