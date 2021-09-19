import React from 'react'; 
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Dashboard from './Dashboard';
import HomeScreen from './HomeScreen';
function Sidebar() {
    return (
        <Router>
            <div>
            <ul>
                <li> 
                    <Link to = "/">Home</Link>
                </li>
                <li>
                <Link to="/categories">Categories</Link>
                </li>
                <li>
                <Link to="/products">Products</Link>
                </li>
                <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>

            <hr />
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/categories" component={CategoryList} />
            <Route path="/products" component={ProductList} />
            <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    )
}

export default Sidebar
