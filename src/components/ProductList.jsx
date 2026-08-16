import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from "../redux/slices/productsSlice";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  // Trigger the async thunk once on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p className="status-msg">Loading products…</p>;
  if (status === "failed") return <p className="status-msg error">Error: {error}</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
