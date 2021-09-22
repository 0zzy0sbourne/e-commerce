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
                        <strong># category name</strong>
                    </h4>
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>

            <CategoryInfo
                categoryId = {categoryId} 
                categoryName = {categoryName}
                categoryParent = {categoryParent}
                categoryDescription = {categoryDescription}
            >
                {/* list out the category properties */}
               
            </CategoryInfo>

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
  padding: 20px;
  border-bottom: 1px solid  lightgray; 
`;
const HeaderLeft = styled.div`
    
}

`;
const HeaderRight = styled.div`
 
`;
