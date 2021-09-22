import {createSlice} from "@reduxjs/toolkit"; 

const initialState = {
    name: null, 
    parent: null, 
    description: null
}

export const categorySlice = createSlice({
    name: 'category', 
    initialState, 
    reducer: {
        setName: (state, action) => {
            state.name = action.payload; 
        },
        setParent: (state, action) => {
            state.parent = action.payload; 
        },
        setDescription: (state, action) => {
            state.description = action.payload; 
        },
    }, 
    
   
});


export  const {setName, setParent, setDescription} = categorySlice.actions; 


// selectors 
export const selectName = (state) => state.categorySlice.name; 
export const selectParent = (state) => state.categorySlice.parent; 
export const selectDescription = (state) => state.categorySlice.description; 

export default categorySlice.reducer; 