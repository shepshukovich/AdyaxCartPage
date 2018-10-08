import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props)
    this.koef = 75.00;
  }

// 225.00 €

  render() {
    return(
          <p>{this.props.quantity * this.koef} €</p>
    )
  }
}

export { TotalPrice };
