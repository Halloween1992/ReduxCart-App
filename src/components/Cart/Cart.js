import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = (state) => {
    return { cartItmes: state.cart.items, totalPrice: state.cart.totalPrice };
  };
  const { cartItmes, totalPrice } = useSelector(cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItmes.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.amount,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <h2>Total price: ${totalPrice}</h2>
    </Card>
  );
};

export default Cart;
