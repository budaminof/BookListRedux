import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={ book.title } className="list-group-item">{ book.title }</li>
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

//conncet takes a function and a component and makes a container.
//a container(smart component) is a component that is aware of the state that redux is creating.
export default connect(mapStateToProps)(BookList);
