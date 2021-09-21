import React, { Component } from 'react';
import "./Form.css"; 



class CategoriesForm extends React.Component {
  render() {
    return (
      <div id="formdiv">
        <h3>Add a new item to the table:</h3>  
        <form className="form" onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="categoryname">
          Category Name:
          <input id="categoryname" value={this.props.newCategoryName} 
            type="text" name="categoryName"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="parentcategory">
          Parent Category:
          <input id="parentcategory" value={this.props.newParentCategory} 
            type="text" name="parentCategory"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categorydescription">
          Category Description:
          <input id="categorydescription" value={this.props.newCategoryDescription} 
            type="text" name="categoryDescription"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categoryphoto">
          Category Photo:
          <input id="categoryphoto" value={this.props.newCategoryPhoto} 
            type="text" name="categoryPhoto"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default CategoriesForm;