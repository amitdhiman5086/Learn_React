import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodCart from "./FoodCart";
import { clearCart, removeOne } from "../utils/cartSlicing";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemove = () => {
    dispatch(removeOne());
  };
  return (
    <div className="p-7">
      <h1
        className="font-bold
            text-3xl"
      >
        Cart Items -{cartItems.length}
      </h1>
      <button
        className="m-4 bg-red-800 p-3 rounded-md text-white hover:bg-black hover:text-white"
        onClick={handleRemove}
      >
        Remove Item{" "}
      </button>{" "}
      <button
        className="p-3 m-10 font-bold bg-black text-white rounded-md hover:bg-white hover:text-black"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex justify-center gap-4  flex-wrap ">
        {cartItems.map((item) => (
          <FoodCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
