import React, { Component } from 'react';
import "./Form.css";
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore";  
import {useDispatch} from "react-redux"; 
import {setName, setParent, setDescription,selectName,  selectParent, selectDescription} from "./slices/categorySlice";
import {useSelector} from "react-redux"; 


   
 /*    
       
function CategoriesForm () {
   
const dispatch = useDispatch(); 
  

const handleFormSubmit = (e) => {
    e.preventDefault();

     
    db.collection("categories").add({
            name: categoryname,
            parent: categoryparent,
            description: categorydescription,
    })

 

   
  };

  const handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    if(name === "categoryName"){
            dispatch(setName({value})); 
        }
        else if(name === "parentCategory"){
            dispatch(setParent({value})); 
        }
        else if(name === "categoryDescription"){
            dispatch(setDescription({value})); 
        }
        


  };

    return (
      <div id="formdiv">
        <h3>Add a new item to the table:</h3>  
        <form className="form" onSubmit={{handleFormSubmit}}>
          <label htmlFor="categoryname">
          Category Name:
          <input id="categoryname" 
            type="text" name="categoryName"
            onChange={handleInputChange} />
          </label>
          <label for="parentcategory">
          Parent Category:
          <input id="parentcategory"
            type="text" name="parentCategory"
            onChange={handleInputChange} />
          </label>
          <label htmlFor="categorydescription">
          Category Description:
          <input id="categorydescription"  
            type="text" name="categoryDescription"
            onChange={handleInputChange} />
          </label>

          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );

}

export default CategoriesForm;
*/ 