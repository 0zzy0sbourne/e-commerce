import React, { Component } from 'react';
import "./Table.css";
class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table className= "table">
          <tbody>
            <tr>
              <th>Category Name</th>
              <th>Parent Category</th>
              <th>Category Description</th>
              <th>Category Photo</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.categoryName}</td>
                  <td>{item.parentCategory}</td>
                  <td>{item.categoryDescription}</td>
                  <td>{item.categoryPhoto}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;