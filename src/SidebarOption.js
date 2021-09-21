import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Dashboard from './Dashboard';   
import App from "./App"; 

function SidebarOption({Icon, url, title}) {

    const navigate = ({url, title}) => {
        <Router>

        
        if(title === "Categories"){
            
        <Switch>
          <Route path="/categories">
            <CategoryList />
          </Route>
        </Switch>
        }
        else if(title === "Products"){
        <Switch>
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
        }
        else if( title === "Dashboard"){
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        
        }

        </Router>
    }; 
    let componentName ;

    if(title === "Categories")
        componentName = CategoryList;  
    else if(title === "Products")
        componentName = ProductList;
    else if(title === "Dashboard" )
        componentName = Dashboard;     
     
        return (
        
        
        <SidebarOptionContainer >
            <Router>
            {Icon && <Icon fontSize = "small" style={{padding: 10}}/>} 
            {Icon ? (
                // <h3> { title }</h3>
                 <a><Link to = {url}>{title}</Link></a> 
            
            ): (
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )}
            <Route exact path="/" component={App}/>  
            <Route path={url} component={componentName} />
            </Router>
        </SidebarOptionContainer> 
           
        
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

 /*
            <Route exact path="/" component={App}/>  
            <Route path={url} component={componentName} />
            */ 