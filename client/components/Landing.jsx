import React from 'react';
import { styles } from '../../public/style.scss';
import { TotalPrice } from './TotalPrice.jsx';
import { Item } from './Item.jsx';
import  AddItem  from './AddItem/AddItem.jsx';
import { connect } from 'react-redux';

class Cart extends React.Component {
  constructor(props) {
    super(props);
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
componentWillMount() {
  console.log(this.props.title);
}
  render() {
    return(
    <div className='cart-wrapper'>
      <div className='cart'>
        <div className='cart-normalizer'>
          <AddItem />
          <hr />
          <Item />
        </div>
        <div className='total'>
          <TotalPrice {...state} />
      </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = state => ({
	title: state.addItem.title,
  description: state.addItem.description,
  cost: state.addItem.cost
});

export default connect( mapStateToProps)( Cart );
