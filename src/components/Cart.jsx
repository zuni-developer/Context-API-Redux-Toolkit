import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../redux/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p className="status-msg">Cart is empty.</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-info">
              <p className="cart-item-title">{item.title}</p>
              <p>${item.price.toFixed(2)} × {item.quantity}</p>
              <div className="qty-controls">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="cart-footer">
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear cart
          </button>
        </div>
      )}
    </aside>
  );
}
