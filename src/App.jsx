import { useTheme } from "./context/ThemeContext"; // Context API
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="main-layout">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}
