import {createSlice} from "@reduxjs/toolkit"; 

const initialState = {
    name: null, 
    description: null, 
    price: null, 
    gender: null, 
    sales: null,
    imgUrl: null, 
 
}

export const productSlice = createSlice({
    name: 'product', 
    initialState, 
    reducers: {
        setProductName: (state, action) => {
            state.name = action.payload; 
        },
        setDescription: (state, action) => {
            state.description = action.payload; 
        },
        setPrice: (state, action) => {
            state.price = action.payload; 
        },
        setGender: (state,action) => {
            state.gender = action.payload; 
        },
        setSales: (state, action)  => {
            state.sales = action.payload;
        },
        setImgUrl: (state, action) => {
            state.imgUrl = action.payload; 
        }
    }, 
    
   
});


export  const {setProductName,setDescription, setPrice, setGender, setSales, setImgUrl} = productSlice.actions; 


// selectors 
export const selectProductName = (state) => state.product.name; 
export const selectGender = (state) => state.product.gender; 
export const selectDescription = (state) => state.product.description; 
export const selectSales = (state) => state.product.sales; 
export const selectPrice = (state) => state.product.price;
export const selectImgUrl = (state) => state.product.imgUrl; 

export default productSlice.reducer; 