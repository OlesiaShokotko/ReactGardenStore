import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { LINK } from "../store/link/link";
import {
  sendFailureAction,
  sendRequestAction,
  sendSuccessAction,
} from "../store/reducer/discountReducer";

const URL = `${LINK}/sale/send`;

export const getDiscountAction = (phoneNumber) => {
  return function (dispatch) {
    dispatch(sendRequestAction());
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneNumber),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.clientRegistered === false) {
          dispatch(sendSuccessAction());
          toast("Discount received!");
        } else {
          toast("Discount has already been used!");
        }
      })
      .catch((error) => {
        dispatch(sendFailureAction(error.message));
      });
  };
};
