import React, { Component } from 'react';
import { connect } from 'react-redux';

//application state and component state are two completly different things.
// react creators could have given them different names. but they didn't.
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h5>Details from:</h5>
        <h2>{this.props.book.title}</h2>
        <h3>{this.props.book.pages} pages</h3>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
