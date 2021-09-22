import React from 'react'
import AddIcon from "@material-ui/icons/Add"; 
import styled from "styled-components"; 
import CategoryOption from './CategoryOption';
import {db} from "./firebase";  
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';
import CategoriesForm from './CategoriesForm';
import { useState } from 'react';

function Categories() {
    // const categoryRef = collection(db, "categories"); 
    const [showComponent, setShowComponent] = useState(false); 
     const [categories, loading, error ] = useCollection(db.collection("categories"));
   let state = {
      categoryName: '#',
      parentCategory: '#',
      categoryDescription: '#',  
      items: []
    }

   const  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...state.items];

    items.push({
      categoryName: state.categoryName,
      parentCategory: state.parentCategory,
      categoryDescription: state.categoryDescription, 

    });
    db.collection("categories").add({
            name: state.categoryName,
            parent: state.parentCategory,
            description: state.categoryDescription,
    })
    /*
    setState({
      items,
      categoryName: '',
      parentCategory: '',
      categoryDescription: '', 
      categoryPhoto: ''
    });
    */ 
  };
    const handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        state[name] = value; 
        

        /*
        setState({
        [name]: value
        })
        */ 
    };
           
     
    const _onButtonClick = () =>  {
        setShowComponent({
        showComponent: true,
        });
    }
   
    // console.log(categories); 



    
    return (
            <CategoriesContainer>
                <nav>
                    
                    <CategoryOption name ="Body" /> 
                    <CategoryOption name = "Shoes"/>
                    <CategoryOption name ="Underwear"/>
                    <CategoryOption name = "coats"/>
                    <CategoryOption name = "accessories"/>
                    <CategoryOption  name = "tops"/>
                    {categories?.docs.map((doc) => (
                        <CategoryOption 
                        key = {doc.id} 
                        id ={doc.id}  
                        name = {doc.data().name}/>
                    ))}
                    <div  onClick = {_onButtonClick}>
                    <CategoryOption  name = "Add Category" addCategoryOption Icon = {AddIcon}/>
                    </div>
                </nav>
                
                {showComponent ?
                <CategoriesForm handleFormSubmit={ handleFormSubmit } 
                handleInputChange={ handleInputChange }
                newCategoryName={ state.categoryName }
                newParentCategory={ state.parentCategory }
                newCategoryDescription = {state.categoryDescription}/> :
                    null
                }
                
            </CategoriesContainer>
    )
    
}

export default Categories
const CategoriesContainer = styled.div`
    margin-top: 40px; 
    > nav {
        display: flex; 
        
    }

`; 

/* 
  {categories?.docs.map((doc) => (
                        <CategoryOption
                            key = {doc.id}
                            id ={doc.id}
                            addCategoryOption
                            title = {doc.data().name}
                        />
                    ))}


{
                        db.collection('categories')
                        .get()
                        .then(querySnapshot => {
                        querySnapshot.docs.map((doc) => (
                            <CategoryOption
                                name = {doc.data().name}
                            /> 
                        ))
                            // do something with documents
                        })
                    }


*/ 