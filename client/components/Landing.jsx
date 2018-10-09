import React from 'react';
import { styles } from '../../public/style.scss';
import { TotalPrice } from './TotalPrice.jsx';
import { Item } from './item/Item.jsx';
import  AddItem  from './AddItem/AddItem.jsx';
import { connect } from 'react-redux';
import ItemRender from './ItemRender.jsx';
import $ from "jquery";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
  $(window).on("load", function() {
    $('.cost').on('keyup', function(e) {
      const rgxp = /\D/;
      const costInput = $('.cost')[0];
      costInput.value = costInput.value.replace(rgxp, '');
    });
  })

  $('.ttl').on('keyup', function(e) {
    const rgxp = /[^a-z]+$/i;
    let ttl = $('.ttl')[0];
    ttl.value = ttl.value.replace(rgxp, '');
  })

  $('.desc').on('keyup', function(e) {
    const rgxp = /[^a-z]+$/i;
    let ttl = $('.desc')[0];
    ttl.value = ttl.value.replace(rgxp, '');
  })
}
  render() {
    return(
      <div className='flex-c'>
        <AddItem />
        <div className='cart-wrapper'>

          <div className='cart'>

            <div className='cart-normalizer'>

              <ItemRender { ...this.props } />
            </div>
            <div className='total'>
              <TotalPrice { ...this.props } />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
	title: state.addItem.title,
  description: state.addItem.description,
  cost: state.addItem.cost,
  render: state.addItem.render,
  selected: state.item.selected
});

export default connect( mapStateToProps)( Cart );
