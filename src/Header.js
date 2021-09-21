import React from 'react'
import styled from "styled-components"; 
import {Avatar} from "@material-ui/core"; 
function Header() {
    return (
        <HeaderContainer>
            {/*Header Left*/}
            <HeaderLeft>
                <HeaderAvatar
                    // TODO: maybe add onClick 
                />
            </HeaderLeft>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    top:0; 
    position: fixed; 
    width: 100%; 
    align-items: center; 
    justify-content: space-between;
    padding: 10px 0;  
    background-color:#ed7066 ;
    color: white; 
`;
const HeaderLeft = styled.div`
    flex: 0.3;  
    display: flex;
    align-items: center; 
    margin-left: 20px; 
`; 

const HeaderAvatar  = styled(Avatar)`
    cursor: pointer; 

    :hover{
        opacity: 0.5; 
    }

`; 