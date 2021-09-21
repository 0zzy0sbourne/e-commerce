import React, {Component} from 'react'
import Table from './CategoryTable';
import ProductsForm from './ProductsForm';
import ProductTable from './ProductTable';
class  ProductList extends Component {
    constructor(){
        super(); 
        
        this.state = {
        productName: '',
        relatedCategories: '',
        productDescription: '', 
        productPhoto: '',  
        productGender:  '',
        price: '', 
        salesQuantity: '',
        items: []
        }
    }; 
    handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      productName: this.state.productName,
      relatedCategories: this.state.relatedCategories,
      productDescription: this.state.productDescription, 
      productPhoto: this.state.productPhoto, 
      productGender: this.state.productGender, 
        price: this.state.price, 
        salesQuantity: this.state.salesQuantity
    });

    this.setState({
        items, 
        productName: '',
        relatedCategories: '',
        productDescription: '', 
        productPhoto: '',  
        productGender:  '',
        price: '', 
        salesQuantity: ''
  
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
          <ProductTable items={ this.state.items }/>
          <ProductsForm handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newProductName={ this.state.productName }
          newRelatedCategory={ this.state.relatedCategories }
          newProductDescription = {this.state.productDescription}
          newProductPhoto = {this.state.productPhoto}
          newProductGender = {this.state.productGender}
          newPrice = {this.state.price}
          newSalesQuantity = {this.state.salesQuantity}
          />
      </div>
    );
  }




}

export default ProductList
