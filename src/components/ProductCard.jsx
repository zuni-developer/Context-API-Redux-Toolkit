import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}
