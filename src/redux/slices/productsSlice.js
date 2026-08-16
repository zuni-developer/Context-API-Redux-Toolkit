/**
 * ===== REDUX TOOLKIT SECTION =====
 * Slice #2: productsSlice
 * Fetches products from a public API using createAsyncThunk,
 * and tracks loading/error status.
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk: performs the API call, dispatches pending/fulfilled/rejected
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;
