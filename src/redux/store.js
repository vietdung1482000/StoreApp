import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";

const store = configureStore({
    reducer: {
        cart: CartSlices,
    }
})

export default store