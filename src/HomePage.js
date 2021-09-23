import React from 'react'
import styled from "styled-components";
function HomePage() {
    return (
        <HomePageContainer> 
        <h1>Admin Panel</h1>
        <HorizontalRow/>
          </HomePageContainer>
    )
}

export default HomePage
const HomePageContainer = styled.div`
    margin-top: 50px;
    font-family: 'Open Sans Condensed', sans-serif;
    align-items: center;
    justify-content: center;
    width: 50%;
    > h1 {
        font-size: 80px;
        margin-top: 15%;
        margin-left: 15%;
        margin-bottom: 5px;
        color: #141850; 
    }
`; 
const HorizontalRow = styled.div`
Float:left;
margin-top: 0;
 height:10px;
 margin-left: 15%;
 width:100px; /* edit this if you want */
 background-color: #ed7066;
`;
