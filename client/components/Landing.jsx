import React from 'react';
import { styles } from '../../public/style.scss';
import { TotalPrice } from './TotalPrice.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }
incrementQuantity() {
  this.setState( function(state) {
    return {
      quantity: state.quantity + 1
    };
  })
}
decrementQuantity() {
  this.setState( function(state) {
    if( state.quantity == 0 ) {
      return {
        quantity: 0
      }
    }
    return {
      quantity: state.quantity - 1
    }
  })
}
  render() {
    const state = this.state;
    return(
    <div className='cart-wrapper'>
      <div className='cart'>
        <div className='cart-normalizer'>
          <div className='item'>
            <div className='avatar'></div>
            <div className='text-and-select'>
              <h1>Title Lorem ipsum dolor sit</h1>
              <p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et. </p>
              <form action="/action_page.php" className='form'>
                <select name="options">
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
          <hr />
        </div>
        <div className='total'>
          <TotalPrice {...state} />
      </div>
      </div>
    </div>
    )
  }
}

export { Cart };
