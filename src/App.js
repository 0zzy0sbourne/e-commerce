import React from 'react'
// import Sidebar from "./Sidebar"; 
import SideBar from './SideBar'
import Header from './Header'
import styled from "styled-components"; 
import "tailwindcss/tailwind.css"
import {Provider} from "react-redux"; 
import {store} from "./store"; 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CategoryPage from './CategoryPage';
import Dashboard from './Dashboard';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Router>
      <Provider store ={store}>
         <Header/>
        <AppBody>
         <SideBar/>
          

            <Switch>
          
          </Switch> 

          

      </AppBody>
      </Provider>
    </Router>     
      

    </div>
  )
}

export default App


const AppBody = styled.div`
display: flex;
height: 100vh;
    font-family: 'Open Sans Condensed', sans-serif;


`; 

