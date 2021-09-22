import {createSlice, nanoid} from "@reduxjs/toolkit"; 

const initialState = {
    name: "name", 
    parent: "parent", 
    description: "description", 
    categoryId: 0
}

export const categorySlice = createSlice({
    name: 'category', 
    initialState, 
    reducers: {
        setName: (state, action) => {
            state.name = action.payload; 
        },
        setParent: (state, action) => {
            state.parent = action.payload; 
        },
        setDescription: (state, action) => {
            state.description = action.payload; 
        },
        enterCategory: (state,action) => {
            state.categoryId = action.payload; 
        }
    }, 
    
   
});


export  const {setName, setParent, setDescription, enterCategory} = categorySlice.actions; 


// selectors 
export const selectName = (state) => state.category.name; 
export const selectParent = (state) => state.category.parent; 
export const selectDescription = (state) => state.category.description; 
export const selectCategoryId = (state) => state.category.categoryId; 

export default categorySlice.reducer; 