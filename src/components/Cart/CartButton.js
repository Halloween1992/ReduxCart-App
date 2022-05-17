import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../Store/us-slice";

const CartButton = (props) => {
  const dispacth = useDispatch();

  const cartAmount = useSelector((state) => state.cart.totalAmount);

  const onShoweCartHandler = () => {
    dispacth(uiSliceActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={onShoweCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
