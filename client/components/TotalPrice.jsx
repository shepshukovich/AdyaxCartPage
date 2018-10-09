import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props)
    this.koef = 75.00;
    this.getTotal = this.getTotal.bind(this);
  }

getTotal() {
  let a = this.props.render;
  console.log(a);
}
// 225.00 €


  render() {
    return(
      <React.Fragment>
{
  this.props.render.length ?
  (<p>
    {+this.props.render[0].cost + +this.props.selected}
  </p>
)
   :
    (console.log('No array') )
}

      </React.Fragment>

    );
  }
}

export { TotalPrice };
