import React from 'react';
import ReactDOM from "react-dom";
import { styles } from '../../public/style.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1};
    this.addQuantity = this.addQuantity.bind(this);
  }
addQuantity() {
  var q = this.state.quantity;
  var w = q + 1;
    this.setState = ({
      quantity: w
    });

    console.log(w);
  }
  componentDidMount(){
    console.log(this.state.quantity);
  }

  render() {
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
                <input type="button" onClick={this.addQuantity}/>
                  <p>{this.state.quantity}</p>
                <input type="button" />
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
          <p>225.00 €</p>
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<Cart />, document.getElementById("cart"));
