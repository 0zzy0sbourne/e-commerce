import {configureStore} from "@reduxjs/toolkit"; 
import categoryReducer from "./slices/categorySlice"; 
import productReducer from "./slices/productSlice"; 
import categoryidsReducer from "./slices/categoryidSlice"; 

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        categoryids: categoryidsReducer, 
    }, 
})