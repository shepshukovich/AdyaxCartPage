import React from 'react';
import { TotalPrice } from '../TotalPrice.jsx';
import { connect } from 'react-redux';
import $ from "jquery";
import { setSelect } from './action.js';

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = { quantity: 0, select: '' };
  }

componentDidMount() {
  $('.select-sku').on('change', function() {
    const a = $('.select-sku')[0];
    console.log(a.value);
  });
}

  render() {
    return(
      <div className='item'>
        <div className='avatar'></div>
        <div className='text-and-select'>
          <h1>{ this.props.title }</h1>
          <p>{this.props.description}</p>
          <form action="/action_page.php" className='form'>
            <select onChange={this.props.handleSelect} name="options" >
              <option value="5">SKU1</option>
              <option value="10">SKU2</option>
              <option value="15">SKU3</option>
              <option value="20">SKU4</option>
            </select>
          </form>
        </div>
        <div className='counter-wrapper'>
          <div className='counter'>
            <input type="button" onClick={ this.decrementQuantity } value='-' />
              <p>{this.state.quantity}</p>
            <input type="button" onClick={ this.incrementQuantity }  value='+' />
          </div>
        </div>
        <div className='remove-wrapper'>
          <div className='remove'>
          </div>
          <div className='amount'>
            <p>{ +this.props.cost + +this.props.selected }</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	selected: state.item.selected
});

const mapDispatchToProps = dispatch => ({
  handleSelect(event) {
    dispatch(setSelect(event.target.value))
  }
})

export default connect( mapStateToProps, mapDispatchToProps)( Item );
