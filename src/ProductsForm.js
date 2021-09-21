import React, {Component} from 'react'

class  ProductsForm extends Component {
    render(){

    return (
        <div id="formdiv">
        <h3>Add a new item to the table:</h3>  
        <form className="form" onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="categoryname">
          Product Name:
          <input id="categoryname" value={this.props.newProductName} 
            type="text" name="productName"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="parentcategory">
        Related Categories: 
          <input id="parentcategory" value={this.props.newRelatedCategory} 
            type="text" name="relatedCategories"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categorydescription">
          Product Description: 
          <input id="categorydescription" value={this.props.newProductDescription} 
            type="text" name="productDescription"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="categoryphoto">
          Product Photo:
          <input id="categoryphoto" value={this.props.newProductPhoto} 
            type="text" name="productPhoto"
            onChange={this.props.handleInputChange} />
          </label>
           <label htmlFor="categoryphoto">
          Product Gender:
          <input id="categoryphoto" value={this.props.newProductGender} 
            type="text" name="productGender"
            onChange={this.props.handleInputChange} />
          </label>
           <label htmlFor="categoryphoto">
          Price:
          <input id="categoryphoto" value={this.props.newPrice} 
            type="text" name="price"
            onChange={this.props.handleInputChange} />
          </label>
        <label htmlFor="categoryphoto">
          Sales Quantity:
          <input id="categoryphoto" value={this.props.newSalesQuantity} 
            type="text" name="salesQuantity"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    ); 
    }
}

export default ProductsForm
