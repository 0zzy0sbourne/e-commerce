import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'
import InboxIcon from "@material-ui/icons/Inbox"
import AppsIcon  from "@material-ui/icons/Apps"
import DraftsIcon from "@material-ui/icons/Drafts"; 
import Dashboard from './Dashboard';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import App from './App';
function SideBar() {
    return (
        <Router>
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>E-Commerce</h2>                        
                    </SidebarInfo>
                </SidebarHeader>
                
                <SidebarOptionContainer >
                    <InboxIcon fontSize = "small" style={{padding: 10}}/> 
                 
                        <Link to = "/" >Home</Link>
                    
           
                </SidebarOptionContainer>

                <SidebarOptionContainer >
                    <InboxIcon fontSize = "small" style={{padding: 10}}/> 
                 
                        <Link to = "/categories" >Categories</Link>
                    
           
                </SidebarOptionContainer> 



                <SidebarOptionContainer >
                
                    <AppsIcon fontSize = "small" style={{padding: 10}}/>
                    
                        <Link to = "/products">Products</Link>
                    
                </SidebarOptionContainer> 



                <SidebarOptionContainer >
                
                     <DraftsIcon fontSize = "small" style={{padding: 10}}/>
                   
                        <Link to = "/dashboard">Dashboard</Link>
                    
                 
                </SidebarOptionContainer> 

                <hr/>

                <UserDropdownContainer>

                </UserDropdownContainer>

            </SidebarContainer>
            <Switch>
            
            <Route path="/categories" component={CategoryList} />
            <Route path="/products" component={ProductList} />
            <Route path="/dashboard" component={Dashboard} />
            </Switch>
            </Router>
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
const  SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px; 
    align-items: center; 
    padding-left: 2px; 
    cursor: pointer; 
    :hover {
        opacity: 0.8; 
        background-color: #ed7066;
    }
    > * {
        color: #141850; 
        padding: 15px; 
    }
    > Link {
        text-decoration:  none; 
    }


`;  
const UserDropdownContainer = styled.div`

`; 


/*

                <SidebarOption Icon = {InboxIcon} url= "/categories" title = "Categories"/>
                <SidebarOption  Icon = {AppsIcon} url = "/products" title = "Products"/>
                <SidebarOption Icon = {DraftsIcon} url = "/dashboard" title = "Dashboard"/> 
*/