import { uiSliceActions } from "./us-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
  return async (dispacth) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-http-d79c3-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) throw new Error("Fetching data failed");
      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchRequest();
      dispacth(
        cartActions.replace({
          items: data.items || [],
          totalAmount: data.totalAmount,
          totalPrice: data.totalPrice,
        })
      );
    } catch (error) {
      dispacth(
        uiSliceActions.notification({
          status: "error",
          title: "error",
          message: "sending data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.notification({
        status: "pending",
        title: "sending",
        message: "Sending...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-d79c3-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalPrice: cart.totalPrice,
          }),
        }
      );

      if (!response.ok) throw new Error("Sending data was failed");
    };

    try {
      await sendRequest();
      dispatch(
        uiSliceActions.notification({
          status: "success",
          title: "success",
          message: "Sending successfully",
        })
      );

      setTimeout(() => {
        dispatch(uiSliceActions.notification(""));
        console.log("timer");
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(
        uiSliceActions.notification({
          status: "error",
          title: "error",
          message: "sending data failed",
        })
      );
    }
  };
};
