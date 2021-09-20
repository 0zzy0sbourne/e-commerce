import React, { Component } from 'react';
import "./Form.css"; 
class Form extends React.Component {
  render() {
    return (
      <div id="formdiv">
        <h3>Add a new item to the table:</h3>  
        <form classname= "form" onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="categoryname">
          Category Name:
          <input id="categoryname" value={this.props.newCategoryName} 
            type="text" name="categoryname"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="parentcategory">
          Parent Category:
          <input id="parentcategory" value={this.props.newParentCategory} 
            type="text" name="parentcategory"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categorydescription">
          Category Description:
          <input id="categorydescription" value={this.props.newCategoryDescription} 
            type="text" name="categorydescription"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categoryphoto">
          Category Photo:
          <input id="categoryphoto" value={this.props.newCategoryPhoto} 
            type="text" name="categoryphoto"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;