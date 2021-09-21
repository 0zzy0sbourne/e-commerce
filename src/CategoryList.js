import React, {Component} from 'react'; 
import Sidebar from './Sidebar'; 
import "./App.css"
import "./CategoryList.css";
import CategoriesForm from './CategoriesForm'; 
import CategoryTable from './CategoryTable';
// import AddIcon from '@mui/icons-material/Add';
class CategoryList extends Component {
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
          <CategoryTable items={ this.state.items }/>
          <CategoriesForm handleFormSubmit={ this.handleFormSubmit } 
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

export default CategoryList;