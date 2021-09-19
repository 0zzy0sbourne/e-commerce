import React from 'react'
import Sidebar from './Sidebar'
import "./CategoryList.css"

function CategoryList() {
    return (
        <div className = "categories-container">
            <h1>Categories</h1>
            <table id="categorytable" class="category-table">
            <th>Category Name</th>
            <th>Parent Category</th> 
            <th>Description</th>
            <th>Category Photo</th>
       
          </table>
        </div>
    )
}

export default CategoryList
