import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={()=> this.props.selectBook(book)}  
          className="list-group-item">
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  };
}

//very important function. the glue between react ad redux
function mapStateToProps(state) {
  //what ever will return will show up as props inside of BookList;
  return {
    books: state.books
  };
}

// Anything returned from this funciton will end as
// props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called the result shoudl be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//conncet takes a function and a component and makes a container.
//a container(smart component) is a component that is aware of the state that redux is creating.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// Pormote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
