import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendCartData, fetchData } from "./Store/cart-actions";
import Notification from "./components/UI/Notification";

let isInit = true;

function App() {
  const dispacth = useDispatch();

  const ui = (state) => {
    return {
      showeCart: state.ui.isCartShown,
      notification: state.ui.notification,
    };
  };
  const { showeCart, notification } = useSelector(ui);
  const cart = useSelector((state) => state.cart);
  const isCartChaged = useSelector((state) => state.cart.ischaged);

  useEffect(() => {
    dispacth(fetchData());
  }, [dispacth]);

  useEffect(() => {
    //prevent running useEffect when app loads
    if (isInit) {
      isInit = false;
      return;
    }
    isCartChaged && dispacth(sendCartData(cart));
  }, [cart, dispacth, isCartChaged]);

  return (
    <Layout>
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showeCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
