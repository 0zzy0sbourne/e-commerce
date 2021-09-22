import React, { Component } from 'react';
import "./Form.css";
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore";  



class CategoriesForm extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: '',
      parentCategory: '',
      categoryDescription: '', 
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      categoryName: this.state.categoryName,
      parentCategory: this.state.parentCategory,
      categoryDescription: this.state.categoryDescription, 

    });

    this.setState({
      items,
      categoryName: '',
      parentCategory: '',
      categoryDescription: '', 
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
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

          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default CategoriesForm;