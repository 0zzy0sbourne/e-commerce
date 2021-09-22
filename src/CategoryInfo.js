import React from 'react'
import styled from "styled-components"; 
function CategoryInfo({categoryId, categoryName, categoryParent, categoryDescription}) {
    
    return (
        <InfoContainer>
            <p>{categoryId}</p> 
            <p>{categoryName}</p>
             <p>{categoryParent}</p>
              <p>{categoryDescription}</p>

        </InfoContainer>    
    )
}

export default CategoryInfo
const InfoContainer = styled.div`
`; 