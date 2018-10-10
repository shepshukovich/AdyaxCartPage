import React from 'react';
import  Item  from './item/Item.jsx';
import { connect } from 'react-redux';

class ItemRender extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }

  render() {
    return(
      <React.Fragment>
        { this.props.render.length ?
            ( <div>
              { this.props.render.map(item => <Item key={item.id} {...item} />) }
              <hr />
              </div>
            ) :
            ( <h1>Please add item using form above</h1> )
        }
      </React.Fragment>
    );
  }
}

export default ItemRender;
