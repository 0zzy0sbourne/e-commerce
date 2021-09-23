import React, {Component} from 'react'
import { Router, Switch, Link, Route } from 'react-router-dom'; 
import styled from "styled-components";
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 
import {useDispatch, useSelector} from "react-redux"; 
import { enterCategory, setDescription, setName, setParent } from './slices/categorySlice';
import { enterCategoryId, selectCategoryIdArray } from './slices/categoryidSlice';
import CategoryPage from './CategoryPage';
import App from './App';
// import CategoriesForm from './CategoriesForm';

function CategoryOption ({name, addCategoryOption, id, Icon, Description, Parent}) {
           
        const dispatch  = useDispatch(); 
    
        const   addCategory =  () =>  {

        const categoryName = prompt("Please enter the category name:"); 
        const categoryParent = prompt("Please enter the category parent:"); 
        const categoryDescription = prompt("Please enter the category description:"); 
        if(categoryName){
            db.collection("categories").add({
                name: categoryName,
                parent: categoryParent,
                description: categoryDescription, 
            })
        }
     
        }; 
  

    const selectCategory =  () =>  {
                dispatch(enterCategoryId(id)); 
                dispatch(enterCategory(id));  
                dispatch(setName(name)); 
                dispatch(setParent(Parent)); 
                dispatch(setDescription(Description)); 

            
          
    }; 

        const categoryidarray = useSelector(selectCategoryIdArray)
        // console.log(categoryidarray); 
    
    return (
        <CategoryOptionContainer 
           onClick = {addCategoryOption ? addCategory : selectCategory}
        >   

        {Icon&& <Icon />}
        <h2>{name}</h2>
            
        
        </CategoryOptionContainer>
    )
    
}

export default CategoryOption

const CategoryOptionContainer = styled.div`
 
    display: flex; 
    font-size: 12px;
    align-items: center; 
    padding-left: 50px;
    > *{
        color: #141850;
    }
   > h2 {
       width: 1%;
       height: 1%; 
    
       font-size: 17px; 
       color:#49274b; 
       cursor: pointer; 
       transition: transform .10s;
        :hover {
            transform: scale(1.2);
            color:#ed7966; 
        }
        :active{
            color:  #49274b; 
        }
   }
    > .MuiSvgIcon-root{
         cursor: pointer; 
       transition: transform .10s;
        :hover {
            transform: scale(1.2);
            color: #49274b; 
        }
        

    }
`;

 /*
 
 */ 