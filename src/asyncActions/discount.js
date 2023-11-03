
import { LINK } from "../store/link/link";
import {
  sendFailureAction,
  sendRequestAction,
  sendSuccessAction,
} from "../store/reducer/discountReducer";

const URL = `${LINK}/sale/send`;

export const getDiscount = (phoneNumber) => {
  return function (dispatch) {
    dispatch(sendRequestAction());
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneNumber),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.data.isClientRegistered === false) {
          dispatch(sendSuccessAction());
        } else {
          dispatch(
            sendFailureAction("This phone number is already registered.")
          );
        }
      })
      .catch((error) => {
        dispatch(sendFailureAction(error.message));
      });
  };
};
