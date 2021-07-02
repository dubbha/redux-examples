import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import { Component } from './Component';

const mapStateToProps = state => ({     // (state, [ownProps])
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
})

const mapDispatchToProps = {            // object with action creators,
  addTodo,                              // wrapped in dispath() calls under the hood
  toggleTodo,                           // with bindActionCreators
  setVisibilityFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
