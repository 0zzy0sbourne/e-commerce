import React, {Component} from 'react'
import styled from "styled-components";
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 
import CategoriesForm from './CategoriesForm';

function CategoryOption ({name, addCategoryOption, Icon}) {
           

      const   addCategory =  () =>  {

         const categoryName = prompt("Please enter the category name"); 
       
        if(categoryName){
            
            db.collection("categories").add({
                name: categoryName, 
            })
         }
        }; 
     

    const selectCategory =  () =>  {

    }; 


    
    return (
        <CategoryOptionContainer 
           //  onClick = {addCategoryOption ? addCategory : selectCategory}
        >   
            <h2 className = "cursor-pointer transition duration-100 transform hover:scale-125"
            
            >{name}</h2> 
        </CategoryOptionContainer>
        
    )
    
}

export default CategoryOption

const CategoryOptionContainer = styled.div`
 
    display: flex; 
    

   > h2 {
       width: 1%;
       height: 1%; 
       padding: 30px; 
       font-size: 17px; 
       color: #ed7966; 
       cursor: pointer; 
       transition: transform .10s;
        :hover {
            transform: scale(1.2);
            color: #49274b; 
        }
        :active{
            color:  #49274b; 
        }
   }
`;
 