import React from 'react'
import styled from "styled-components"; 
import AddIcon from "@material-ui/icons/Add"; 
import {
    setProductName, 
    setDescription, 
    setGender,
     setImgUrl, 
     setPrice,
      setSales, 
      selectDescription, 
      selectGender,
    selectImgUrl, 
    selectPrice, 
    selectProductName,
    selectSales
    } 
      from "./slices/productSlice";
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

import ProductOption from './ProductOption';
import {db} from "./firebase"; 

function Products({categoryId}) {
    // get the products of doc with the corresponding categoryId

    const [value, loading, error] = useCollection(
    db.collection("categories").doc(categoryId).collection("Products")
  );

         const   addProduct =  () =>  {
        const productName = prompt("Please enter the product name"); 
        const productDescription = prompt("Please enter the product description:"); 
        const productGender = prompt("Please enter the product gender:"); 
        const productPrice = prompt("Please enter the product price:");
        const productImgUrl = prompt("Please enter the product's image url:");
        // sales will be set to 0 
       
        if(productName){
            db.collection("categories").doc(categoryId).collection("Products").add({
                productname: productName,
                productdescription: productDescription,
                productgender: productGender,
                price: productPrice,
                imgurl: productImgUrl,
                sales: 0, 
            })
        }
     
        }; 

   
    return (
        
        <ProductsContainer>
         
            {value?.docs.map((doc) => (
                <ProductOption 
                    name = {doc.data().productname}
                    description = {doc.data().productdescription}
                    gender = {doc.data().productgender}
                    price={doc.data().price}
                    sales = {doc.data().sales}
                    imgUrl = {doc.data().imgurl}
                    categoryId = {categoryId}
                /> 
            )) }

            <AddIcon  onClick={addProduct}/> 

        </ProductsContainer>
    )
}

export default Products

const ProductsContainer = styled.div`

    > .MuiSvgIcon-root{
         position: fixed;
          
        font-size: 100px;
        color: #ed7066; 
        padding: 50px;
        margin-left: 45%;
        color: #ed7966; 
       cursor: pointer; 

       transition: transform .10s;
        :hover {
            transform: scale(1.2);
            color: #49274b; 
        }
        :active{
            color:  #49274b; 
        }
        
    }
`; 
