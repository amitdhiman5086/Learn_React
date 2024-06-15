import { configureStore } from "@reduxjs/toolkit";
import cartSlicing from "./cartSlicing";
const store = configureStore({
    reducer : {
        cart : cartSlicing
    }
});

export default store;
