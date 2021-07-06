import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter, setKeyword } from './actions';
import { getVisibilityFilter, getVisibleTodosFilteredByKeyword, getKeyword } from './selectors';
import { Component } from './Component';

const mapStateToProps = state => ({     // (state, [ownProps])
  visibilityFilter: getVisibilityFilter(state),
  keyword: getKeyword(state),
  visibleTodos: getVisibleTodosFilteredByKeyword(state),
})

const mapDispatchToProps = {            // object with action creators,
  addTodo,                              // wrapped in dispath() calls under the hood
  toggleTodo,                           // with bindActionCreators
  setVisibilityFilter,
  setKeyword,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
