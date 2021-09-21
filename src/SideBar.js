import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import CreateIcon from "@material-ui/icons/Create" 
import InboxIcon from "@material-ui/icons/Inbox"
import AppsIcon  from "@material-ui/icons/Apps"
import DraftsIcon from "@material-ui/icons/Drafts"; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Dashboard from './Dashboard';    

function SideBar() {
    return (
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>E-Commerce</h2>                        
                    </SidebarInfo>
                </SidebarHeader>


                <SidebarOption Icon = {InboxIcon} url= "/categories" title = "Categories"/>
                <SidebarOption  Icon = {AppsIcon} url = "/products" title = "Products"/>
                <SidebarOption Icon = {DraftsIcon} url = "/dashboard" title = "Dashboard"/>
                <hr/>

                <UserDropdownContainer>

                </UserDropdownContainer>

            </SidebarContainer>
    )
}

export default SideBar

const SidebarContainer = styled.div`
background-color: #fae5df;
color: white; 
flex: 0.3; 
max-width: 260px;
margin-top: 60px; 
    > hr { 
        margin-top: 10px; 
        border: 1px solid #49274b; 
        margin-bottom : 10px; 
    } 
`; 

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 2px solid #49274b; 
    padding: 13px; 
`;
const SidebarInfo = styled.div`
>h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px; 
    color: #141850;
}
`;  
const UserDropdownContainer = styled.div`

`; 