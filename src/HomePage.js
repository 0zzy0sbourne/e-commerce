import React from 'react'
import styled from "styled-components";
function HomePage() {
    return (
        <HomePageContainer> 
        <h1>Admin Panel</h1>
        <TitleHorizontalRow/>
        <p>Welcome.</p>

            <ExplanationContainer>
                <h2>Safe Products</h2>
                <ExplanationHorizontalRow/>
                <p>We apply strict requirements regarding quality, chemicals-use and child safety. We also want you to be confident 
                    that our products are safe and for all who come into contact with them, all the way from fibre to wardrobe.</p>
            </ExplanationContainer>

            <SecondExplanationContainer>
                <h2>Product Policy</h2>
                <SecondExplanationHorizontalRow/>
                <p>Our brand is associated with affordable fashion, design and quality. 
                    It also stands for responsibility, consideration and assurance. Sustainability is part of everything we do and our goals are set very high. We conduct our business with a long-term view and do our utmost to work pro-actively 
                    in all areas with a focus on quality, the environment, safety, working conditions and social issues.</p>
            </SecondExplanationContainer>
        </HomePageContainer>
    )
}

export default HomePage
const SecondExplanationContainer = styled.div`
    margin-top: 50px;
      > h2 {
        font-size: 40px;
        margin-top: 5%;
        margin-left: 15%;
        margin-bottom: 5px;
        color: #141850; 
    }
    > p {
        margin-left: 15%;
        width: 500px;

    }
`;
const SecondExplanationHorizontalRow  = styled.div`
 Float:left;
 margin-top: 0;
 height:3px;
 margin-left: 15%;
 width:500px; /* edit this if you want */
 background-color: #ed7066;
`;
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
    > p {
        font-size: 30px;
        margin-left: 15%;
        margin-bottom: 5px;
        color: #141850;
    }
`; 
const ExplanationContainer = styled.div`
    margin-top: 50px;
      > h2 {
        font-size: 40px;
        margin-top: 5%;
        margin-left: 120%;
        margin-bottom: 5px;
        color: #141850; 
    }
    > p {
        margin-left: 120%;
        width: 300px;

    }
    
`; 
const TitleHorizontalRow = styled.div`
Float:left;
margin-top: 0;
 height:6px;
 margin-left: 15%;
 width:500px; /* edit this if you want */
 background-color: #ed7066;
`;
const ExplanationHorizontalRow = styled.div`
Float:left;
margin-top: 0;
 height:3px;
 margin-left: 120%;
 width:300px; /* edit this if you want */
 background-color: #ed7066;
`;
