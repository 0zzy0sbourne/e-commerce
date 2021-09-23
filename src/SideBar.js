import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'
import InboxIcon from "@material-ui/icons/Inbox"
import AppsIcon  from "@material-ui/icons/Apps"
import DraftsIcon from "@material-ui/icons/Drafts"; 
import Dashboard from './Dashboard';
// import CategoryList from './CategoryList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProductList from './ProductList';
import Categories from "./Categories"; 
import App from './App';
import CategoryPage from './CategoryPage';
import HomePage from './HomePage';
import {useSelector} from "react-redux";
import { selectCategoryIdArray } from './slices/categoryidSlice';
function SideBar() {

    const [showCategories, setshowCategories] = useState(false); 
 // const categoryidarray = useSelector(selectCategoryIdArray); 
    return (
        <Router>
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>E-Commerce</h2>                        
                    </SidebarInfo>
                </SidebarHeader>
                
                <SidebarOptionContainer onClick={()=>setshowCategories(false)}>
                    <InboxIcon fontSize = "small" style={{padding: 10}}/> 
                 
                        <Link to = "/" ><h3>Home</h3></Link>
                    
           
                </SidebarOptionContainer>

                
                <SidebarOptionContainer onClick={()=>setshowCategories(true)}>
                
                    <AppsIcon fontSize = "small" style={{padding: 10}}/>
                    
                        <Link to = "/products"><h3>Products</h3></Link>
                    
                </SidebarOptionContainer> 



                <SidebarOptionContainer onClick={() => setshowCategories(false)}>
                
                     <DraftsIcon fontSize = "small" style={{padding: 10}}/>
                   
                        <Link to = "/dashboard"><h3>Dashboard</h3></Link>
                    
                 
                </SidebarOptionContainer> 

                <hr/>


                <SidebarOptionContainer onClick={() => setshowCategories(!showCategories)}>
                    <ExpandMoreIcon fontSize = "small" style={{padding: 10}}/> 
                 
                    <h3>Categories</h3>
           
                </SidebarOptionContainer> 
                <hr/>

                {showCategories ?
                <Categories/> : null 
                }
                



                <UserDropdownContainer>

                </UserDropdownContainer>

            </SidebarContainer>
            <Switch>
            
           <Route exact path ="/" component = {HomePage} />  
            <Route path="/products" component={CategoryPage} />
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
        margin-top: 0px; 
        border: 1px solid #49274b; 
        margin-bottom : 0px; 
    } 
`; 

const SidebarHeader = styled.div`
    height: 55px;
    display: flex;
    border-bottom: 2px solid #49274b; 
    padding: 13px; 
`;
const SidebarInfo = styled.div`
>h2 {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 5px; 
    color: #141850;
}
`; 
const  SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 15px; 
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