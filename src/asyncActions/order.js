
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LINK } from "../store/link/link";

const URL = `${LINK}/order/send`;

export const sendOrderAction = (order) => {
  return function (dispatch) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        toast(data.message);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };
};
