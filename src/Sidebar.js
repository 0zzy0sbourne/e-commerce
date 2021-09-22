import React from 'react'; 
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Dashboard from './Dashboard';
import HomeScreen from './HomeScreen';
import App from "./App";
/* 
function Sidebar() {
    return (
        <div className = "sidebar">
        <Router>
            <div>
            <ul>
                <li> 
                    <a><Link to = "/">Home</Link></a>
                </li>
                <li>
                      <a><Link to = "/categories">Categories</Link></a>
                </li>
                <li>
                      <a><Link to = "/products">Products</Link></a>
                </li>
                <li>
                    <a><Link to="/dashboard">Dashboard</Link></a>
                </li>
            </ul>

            <hr />
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/categories" component={CategoryList} />
            <Route path="/products" component={ProductList} />
            <Route path="/dashboard" component={Dashboard} />
            </div>  
        </Router>
        </div>
    )
}

export default Sidebar
*/ 