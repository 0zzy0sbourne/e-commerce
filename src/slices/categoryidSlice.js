import {createSlice, nanoid} from "@reduxjs/toolkit"; 

const initialState = {
    categoryids: [],
}

export const categoryidSlice = createSlice({
    name: 'categoryids', 
    initialState, 
    reducers: {
        enterCategoryId: (state,action) => {
            state.categoryids.push(action.payload);  
        }
    }, 
    
   
});


export  const {enterCategoryId} = categoryidSlice.actions; 


// selectors 
export const selectCategoryIdArray = (state) => state.categoryids.categoryids; 

export default categoryidSlice.reducer; 