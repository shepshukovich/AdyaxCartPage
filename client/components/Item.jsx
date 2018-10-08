import React from 'react';
import { TotalPrice } from './TotalPrice.jsx';

class Item extends React.Component {
  constructor(props){
    super(props)

    this.state = { quantity: 0, select: '' };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.skuSelector = this.skuSelector.bind(this);
  }

  incrementQuantity() {
    this.setState( function(state){
      return {
        quantity: state.quantity + 1
      };
    })
  }
  decrementQuantity() {
    this.setState( function(state) {
      if( state.quantity == 0 ){
        return {
          quantity: 0
        }
      }
      return {
        quantity: state.quantity - 1
      }
    })
  }
  skuSelector(e) {

    this.setState( function(state){
      return {
        select: e.target.value
      }
    })
    console.log(e.target.value);

  }


  render() {
    return(
      <div className='item'>
        <div className='avatar'></div>
        <div className='text-and-select'>
          <h1>Title Lorem ipsum dolor sit</h1>
          <p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et. </p>
          <form action="/action_page.php" className='form'>
            <select name="options" onChange={ this.skuSelector }>
              <option value="SKU1">SKU1</option>
              <option value="SKU2">SKU2</option>
              <option value="SKU3">SKU3</option>
              <option value="SKU4">SKU4</option>
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
            <p>75.00 €</p>
          </div>
        </div>
      </div>
    )
  }
}

export { Item };
