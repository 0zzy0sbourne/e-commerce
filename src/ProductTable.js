import React, {Component} from 'react'
import "./Table.css"; 
class ProductTable extends Component {
    constructor (props){
    super(props);
    }
    render(){

    
    const items = this.props.items; 
    return (
        <div id="Table">
        <table className= "table">
          <tbody>
            <tr>
              <th>Product Name</th>
              <th>Related Categories</th>
              <th>Product Description</th>
              <th>Product Photo</th>
              <th>Product Gender</th>
              <th>Price</th>
              <th>Sales</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.productName}</td>
                  <td>{item.relatedCategories}</td>
                  <td>{item.productDescription}</td>
                  <td>{item.productPhoto}</td>
                  <td>{item.productGender}</td>
                  <td>{item.price}</td>
                  <td>{item.salesQuantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ); 
}
}

export default ProductTable; 
