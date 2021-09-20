import React, { Component } from 'react';
import './App.css';
// import Table from './Table';
import Form from './Form';
import "./HomeScreen.css"; 
import Table from './Table';

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: '',
      parentCategory: '',
      categoryDescription: '', 
      categoryPhoto: '',  
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
      categoryPhoto: this.state.categoryPhoto

    });

    this.setState({
      items,
      categoryName: '',
      parentCategory: '',
      categoryDescription: '', 
      categoryPhoto: ''
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
      <div className="table-form-container">
          <Table items={ this.state.items }/>

          <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newCategoryName={ this.state.categoryName }
          newParentCategory={ this.state.parentCategory }
          newCategoryDescription = {this.state.categoryDescription}
          newCategoryPhoto = {this.state.categoryPhoto}
          />
      </div>
    );
  }
}

export default HomeScreen;


/* 
<Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newUsername={ this.state.username }
          newPassword={ this.state.password } />
*/  