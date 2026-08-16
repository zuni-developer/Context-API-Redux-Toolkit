/**
 * ===== CONTEXT API SECTION =====
 * This file demonstrates React's built-in Context API.
 * It shares "theme" state (light/dark) across the whole app
 * without prop-drilling.
 */
import { createContext, useContext, useState, useMemo } from "react";

// 1. Create the context
const ThemeContext = createContext(undefined);

// 2. Create a Provider component that owns the state
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // useMemo avoids re-creating the context value object on every render
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// 3. Custom hook for consuming the context safely
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
