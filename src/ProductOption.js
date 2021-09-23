import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import  {selectProductName, selectDescription, selectGender, selectSales, selectPrice, selectImgUrl } from "./slices/productSlice"; 
import styled from "styled-components";
import {db} from "./firebase"; 

function ProductOption({name, description, gender, price, sales, imgUrl, categoryId }) {

      
    /*
    const name = useSelector(selectProductName);
    const description = useSelector(selectDescription); 
    const gender = useSelector(selectGender); 
    const sales = useSelector(selectSales); 
    const price = useSelector(selectPrice); 
    const imageUrl = useSelector(selectImgUrl); 
    */ 
    return (
        <ProductOptionContainer>
            
         <img src = {imgUrl} height="80px" width="80px"/> 
             <div>
            <p>{name}</p>
            </div>
            <VerticalRow/>
            <div>
            <p>{description}</p>
            </div>
            <VerticalRow/>
             <div>
            <p>{gender}</p>
            </div>
            <VerticalRow/>
             <div>
            <p>{price}</p>
            </div>
            <VerticalRow/>
             <div>
            <p>{sales}</p>
            </div>  
            
            

        </ProductOptionContainer>
    )
}

export default ProductOption
const ProductOptionContainer = styled.div`
margin-top: 50px;
height: 60px;
display: flex;
justify-content: space-between ;
align-items: center;
padding: 20px;
background-color: #fae5df;
border-radius: 50px;
`;
const VerticalRow = styled.div`
Float:left;
 height:50px;
 width:1px; /* edit this if you want */
 background-color: black;
`;

/*
<img src = {imageUrl} height="150px" width="150px"/> 
             <div>
            <h4>Name:</h4>
            <p>{name}</p>
            </div>
            <div>
            <h4>Description:</h4>
            <p>{description}</p>
            </div>
             <div>
            <h4>Gender:</h4>
            <p>{gender}</p>
            </div>
             <div>
            <h4>Price:</h4>
            <p>{price}</p>
            </div>
             <div>
            <h4>Sales:</h4>
            <p>{sales}</p>
            </div>
*/ 
