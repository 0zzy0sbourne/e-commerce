import React from 'react'; 
import Sidebar from './Sidebar'; 
import "./CategoryList.css"; 
// import AddIcon from '@mui/icons-material/Add';
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
         


          
            <div className = "categoryinput">
                  

                <form id = "categoryform" action= "#">
                    <input  type="text" id = "categoryname" name = "categoryname"  placeholder="Add Category" />
                    <input  type="text" id = "parentcategory" name = "parentcategory"  placeholder="Add Category" />
                    <input  type="text" id = "categorydescription" name = "categorydescription"  placeholder="Add Category" />
                    <input  type="text" id = "categoryphoto" name = "categoryphoto" placeholder="Add Category" />
                                        
                       
                </form> 
                <button onclick = "addCategory()" id="categorybutton" value = "Add" type="button">Add</button>
            </div>
            
            
    
        </div>
    )
}

export default CategoryList


 