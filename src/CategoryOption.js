import React from 'react'
import styled from "styled-components";


function CategoryOption({name, addCategoryOption, Icon}) {
    
    const addCategory = () => {

    }; 
    const selectCategory = () => {

    }; 

    return (
        <CategoryOptionContainer 
            onClick = {addCategoryOption ? addCategory : selectCategory}
        >   
            {Icon && <Icon /> }
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
        }
        :active{
            color: #303179; 
        }
   }
`;
 