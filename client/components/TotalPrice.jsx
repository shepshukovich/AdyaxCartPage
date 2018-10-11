import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props)
    this.koef = 75.00;
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    let a = this.props.render;
    // console.log(a);
  }

componentDidMount() {
  // console.log(this.props);

}

  render() {
    return(
      <React.Fragment>
        { this.props.render.length ?
          ( <p>{ +this.props.amount }</p> )
          :
          ( <p>0</p> )
        }
      </React.Fragment>
    );
  }
}

export { TotalPrice };
