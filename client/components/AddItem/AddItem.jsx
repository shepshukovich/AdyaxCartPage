import React from 'react';
import { Item } from '../Item.jsx';
import { connect } from 'react-redux';
import { setTitle, setDescription, setCost } from "./action.js";

class AddItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <form onSubmit={ this.props.handleFormSubmit }>
          <input type="text" placeholder='Enter Title' value={ this.props.title } onKeyUp={this.props.handleTitle} />
          <input type="text" placeholder='Enter description' value={ this.props.description } onChange={ this.props.handleDescription } />
          <input type="text" placeholder='Enter cost' value={ this.props.cost } onChange={ this.props.handleCost } />
          <input type='submit' value='Add Item' />
        </form>
    );
  }
}

const mapStateToProps = state => ({
	title: state.title,
  description: state.description,
  cost: state.cost
});

const mapDispatchToProps = dispatch => ({
	handleTitle(event) {
		dispatch(setTitle(event.target.value));
	},
  handleDescription(event) {
    dispatch(setDescription(event.target.value));
  },
  handleCost(event) {
    dispatch(setCost(event.target.value));
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( AddItem );
