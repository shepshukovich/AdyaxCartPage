import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setDescription, setCost, setRenderSequence,
        remTitle, setHoverTitle, setHoverDescription, setHoverCost
       } from "./action.js";


class AddItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tooltipTitleStyle       = { opacity: this.props.hoverTitle ? 1 : 0        };
    const tooltipDescriptionStyle = { opacity: this.props.hoverDescription ? 1 : 0  };
    const tooltipCostStyle        = { opacity: this.props.hoverCost ? 1 : 0         };

    return(
        <form onSubmit={ this.props.handleFormSubmit } className='addItem'>
          <div>
            <div className='tiptool'>
              <div style={ tooltipTitleStyle } className='tool'>
                Enter only letters
              </div>
              <div id="triangle" style={tooltipTitleStyle}></div>
            </div>
            <input className='add-item-input ttl' type="text" placeholder='Enter Title'
              value={ this.props.title } onChange={ this.props.handleTitle }
              onFocus={ this.props.handleTitleMouseIn } onBlur={ this.props.handleTitleMouseOut } />
          </div>
          <div>
            <div className='tiptool'>
              <div style={tooltipDescriptionStyle} className='tool'>
                Enter only letters
              </div>
              <div id="triangle" style={tooltipDescriptionStyle}></div>
            </div>
            <input className='add-item-input desc' type="text" placeholder='Enter description'
              value={ this.props.description } onChange={ this.props.handleDescription }
              onFocus={ this.props.handleDescriptionMouseIn } onBlur={ this.props.handleDescriptionMouseOut }/>
          </div>
          <div>
            <div className='tiptool'>
              <div style={tooltipCostStyle} className='tool'>
                Enter only digits
              </div>
              <div id="triangle" style={tooltipCostStyle}></div>
            </div>
            <input className='add-item-input cost' type="text" placeholder='Enter cost'
              value={ this.props.cost } onChange={ this.props.handleCost }
              onFocus={ this.props.handleCostMouseIn } onBlur={ this.props.handleCostMouseOut }/>
          </div>
          <div>
            <input type='button' value='Add Item' onClick={ this.props.handleRender } />
          </div>
        </form>
    );
  }
  // componentDidMount() {
  //   console.log(this.props.children)
  // }
}

const mapStateToProps = state => ({
	title:            state.addItem.title,
  description:      state.addItem.description,
  cost:             state.addItem.cost,
  render:           state.addItem.render,
  hoverTitle:       state.addItem.hoverTitle,
  hoverDescription: state.addItem.hoverDescription,
  hoverCost:        state.addItem.hoverCost
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
    dispatch(setRenderSequence());
    dispatch(setTitle(''));
    dispatch(setDescription(''));
    dispatch(setCost(''));
  },
  handleTitleMouseIn(event) {
    dispatch(setHoverTitle(true));
  },
  handleTitleMouseOut(event) {
    dispatch(setHoverTitle(false));
  },
  handleDescriptionMouseIn(event) {
    dispatch(setHoverDescription(true));
  },
  handleDescriptionMouseOut(event) {
    dispatch(setHoverDescription(false));
  },
  handleCostMouseIn(event) {
    dispatch(setHoverCost(true));
  },
  handleCostMouseOut(event) {
    dispatch(setHoverCost(false));
  }
});

export default connect( mapStateToProps, mapDispatchToProps )( AddItem );
