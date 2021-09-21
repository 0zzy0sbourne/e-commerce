import React from 'react'
import AddIcon from "@material-ui/icons/Add"; 
import styled from "styled-components"; 
import CategoryOption from './CategoryOption';

function Categories() {
    return (
            <CategoriesContainer>
                <nav>
                    
                    <CategoryOption name ="Body" /> 
                    <CategoryOption name = "Shoes"/>
                    <CategoryOption name ="Underwear"/>
                    <CategoryOption name = "coats"/>
                    <CategoryOption name = "accessories"/>
                    <CategoryOption  name = "tops"/>
                    <CategoryOption  name = "Add Category" addCategoryOption Icon = {AddIcon}/>
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