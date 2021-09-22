import React from 'react'
import styled from "styled-components"; 
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
                /> 
            )) }

        </ProductsContainer>
    )
}

export default Products

const ProductsContainer = styled.div`

`; 
