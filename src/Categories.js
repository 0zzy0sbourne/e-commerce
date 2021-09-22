import React from 'react'
import AddIcon from "@material-ui/icons/Add"; 
import styled from "styled-components"; 
import CategoryOption from './CategoryOption';
import {db} from "./firebase";  
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';
// import CategoriesForm from './CategoriesForm';
import { useState } from 'react';
import {useDispatch} from "react-redux"; 
import {setName, setParent, setDescription,selectName,  selectParent, selectDescription} from "./slices/categorySlice";
import {useSelector} from "react-redux"; 

function Categories(){    
    //const dispatch = useDispatch();
   //  const [showComponent, setShowComponent] = useState(false); 
     const [categories, loading, error ] = useCollection(db.collection("categories"));
    // let categoryname, categoryparent, categorydescription; 
     

           
     
 



    
    return (
            <CategoriesContainer>
                <nav>
                    
                    {categories?.docs.map((doc) => (
                        <CategoryOption 
                        key = {doc.id} 
                        id ={doc.id}  
                        name = {doc.data().name}/>
                    ))}
                    
                    <CategoryOption  name = "Add Category" addCategoryOption/>
                
                </nav>
              
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

                    <CategoryOption name ="Body" /> 
                    <CategoryOption name = "Shoes"/>
                    <CategoryOption name ="Underwear"/>
                    <CategoryOption name = "coats"/>
                    <CategoryOption name = "accessories"/>
                    <CategoryOption  name = "tops"/>
*/ 
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


/*   
                {showComponent ?
                <CategoriesForm handleFormSubmit={handleFormSubmit} 
                /> :
                    null
                }*/ 



                /*   const _onButtonClick = () =>  {
        setShowComponent({
        showComponent: true,
        });
    }
   */ 