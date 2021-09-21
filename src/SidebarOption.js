import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Dashboard from './Dashboard';   
import App from "./App"; 

function SidebarOption({Icon, url, title}) {
    let componentName ;
    if(title === "Categories")
        componentName = "CategoryList"; 
    else if(title === "Products")
        componentName = "ProductList";
    else if(title === "Dashboard" )
        componentName = "Dashboard"    
    return (
        
        <Router>
        <SidebarOptionContainer>
            {Icon && <Icon fontSize = "small" style={{padding: 10}}/>} 
            {Icon ? (
                 <a><Link to = {url}>{title}</Link></a>
            ): (
                <SidebarOptionChannel>
                    
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer> 
            
            <Route exact path="/" component={App}/>  
            <Route path={url} component={componentName} />
        
        </Router>
    ); 
}

export default SidebarOption
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

`; 
const SidebarOptionChannel = styled.div`

`; 


// <span>#</span>{title}>