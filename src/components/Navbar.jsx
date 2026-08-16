import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext"; // Context API
import { selectCartCount } from "../redux/slices/cartSlice"; // Redux

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <h1>Zuni's shopping mart</h1>
      <div className="navbar-actions">
        <span className="cart-badge">Cart: {cartCount}</span>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
      </div>
    </nav>
  );
}
