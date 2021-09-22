import React from 'react'
import styled from "styled-components"; 
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"; 
import {selectCategoryId, selectName, selectDescription, selectParent} from "./slices/categorySlice"; 
import {useSelector} from "react-redux"; 
import EditCategory from './EditCategory';
import {db} from   "./firebase"; 
import CategoryInfo from './CategoryInfo';
function CategoryPage() {
    
    const categoryId = useSelector(selectCategoryId); 
    const categoryName = useSelector(selectName);
    const categoryParent = useSelector(selectParent); 
    const categoryDescription = useSelector(selectDescription); 
     
                 
    return (
        <CategoryContainer>
            <Header> 
                <HeaderLeft>
                    <h4>
                        <strong># category name {categoryId} {categoryName} {categoryDescription}</strong>
                    </h4>
                </HeaderLeft>

                <HeaderRight>
                    <p>
                     <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>

         
               

            <EditCategory 
             categoryId = {categoryId}
            />
        </CategoryContainer>
    )
}

export default CategoryPage
const  CategoryContainer = styled.div`
    
    flex: 0.7;
    flex-grow:1;
    overflow-y: scroll;  
    margin-top:50px; 
`;
const Header = styled.div`
  display:flex;
  justify-content: space-between; 
  padding: 15px;
  border-bottom: 1px solid  lightgray; 
`;

const HeaderLeft = styled.div`
    display: flex;
    >h4 {
        margin-right: 10px;
        display: flex;
        text-transform: lowercase; 
    }    
`;

const HeaderRight = styled.div`
  > p{ 
      display: flex;
      align-items: center; 
  }
`;


/*
   <CategoryInfo
                categoryId = {categoryId} 
                categoryName = {categoryName}
                categoryParent = {categoryParent}
                categoryDescription = {categoryDescription}
            />
 

*/ 