import React from 'react'
import styled from "styled-components"; 
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"; 
import {selectCategoryId, selectName, selectDescription, selectParent} from "./slices/categorySlice"; 
import {useSelector, useDispatch} from "react-redux";
import EditCategory from './EditCategory';
import  {setProductName, selectProductName, setDescription,setPrice, setImgUrl,setGender, setSales, selectPrice } from "./slices/productSlice"; 
import {db} from   "./firebase"; 
import ProductOption from './ProductOption';
function CategoryPage() {

    
    const  dispatch = useDispatch(); 
    const categoryId = useSelector(selectCategoryId); 
    const categoryName = useSelector(selectName);
    const categoryParent = useSelector(selectParent); 
    const categoryDescription = useSelector(selectDescription); 
    if(!categoryId){
       return false; 
    }



  // const productName = useSelector(selectProductName); 
  // console.log(productName); 
db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setProductName(doc.data().productname)),
      
            
    )
  })
  db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setDescription(doc.data().productdescription)),
            
    )
  })
db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setPrice(doc.data().price)),
      
            
    )
  })
  db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setGender(doc.data().productgender)),
      
            
    )
  })
db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setSales(doc.data().sales)),
      
            
    )
  })
  db.collection('categories').doc(categoryId).collection('Products')
  .get()
  .then(querySnapshot => {
    querySnapshot.docs.map(doc =>
        dispatch(setImgUrl(doc.data().imgurl)),
      
            
    )
  })
       
       
    
 
    
                 
    return (
        <CategoryContainer>
            <Header> 
                <HeaderLeft>
                    <h2>
                        <strong>{categoryName}</strong>
                    </h2>
                </HeaderLeft>

                <HeaderRight>
                    <p>
                     <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>

                <Body>
                   
                    <CategoryDescriptionContainer>
                    <h3>Description:</h3>
                    <p>{categoryDescription}</p> 
                    </CategoryDescriptionContainer>

                  
                    <ProductOption/>
                    

                </Body>

         
               

            <EditCategory 
             categoryId = {categoryId}
            />
        </CategoryContainer>
    )
}

export default CategoryPage; 

const Body = styled.div`
`; 
const  CategoryContainer = styled.div`
    
    flex: 0.7;
    flex-grow:1;
    overflow-y: scroll;  
    margin-top:50px; 
`;
const ProductsContainer = styled.div`
`; 
const CategoryDescriptionContainer =styled.div`
    border-bottom: 1px solid  lightgray;
`; 
const Header = styled.div`
  display:flex;
  justify-content: space-between; 
  padding: 12px;
  border-bottom: 1px solid  lightgray; 
`;

const HeaderLeft = styled.div`
    display: flex;
    >h4 {
        margin-right: 10px;
        display: flex;
         
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
 


{products?.docs.map((doc) => (
                            <p>{doc.data().productname}</p>   
                        ))}


*/ 

