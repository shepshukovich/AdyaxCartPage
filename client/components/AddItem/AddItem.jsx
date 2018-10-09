import React from 'react';
import { connect } from 'react-redux';
import { setTitle, setDescription, setCost, setRenderSequence,
        remTitle} from "./action.js";

class AddItem extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return(
        <form onSubmit={ this.props.handleFormSubmit } className='addItem'>
          <input className='add-item-input ttl' type="text" placeholder='Enter Title' value={ this.props.title } onChange={this.props.handleTitle}  />
          <input className='add-item-input desc' type="text" placeholder='Enter description' value={ this.props.description } onChange={ this.props.handleDescription } required />
          <input className='add-item-input cost' type="text" placeholder='Enter cost' value={ this.props.cost } onChange={ this.props.handleCost }   />
          <input type='button' value='Add Item' onClick={ this.props.handleRender } />
        </form>
    );
  }
}

const mapStateToProps = state => ({
	title: state.title,
  description: state.description,
  cost: state.cost,
  render: state.render
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
  },
  handleRender(event) {
    dispatch(setRenderSequence( event.target.value ));
    dispatch(setTitle('Title'));
    dispatch(setDescription('"description"'));
    dispatch(setCost(25));

  }
});

export default connect( mapStateToProps, mapDispatchToProps )( AddItem );
