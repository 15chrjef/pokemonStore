import React from 'react';
class Cart extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var image={
      width: '6vw',
      height: '6wh',
      marginRight: '6px'
    }
    return (
      <div onClick={this.props.ToggleCart}>
        <img 
          onClick={this.props.CheckOut} 
          style={image} 
          src='https://pogobag.me/assets/itemstorageupgrade.1-26b866643ede023408c7d01fb4449e1db173faa5a5dcbebe90a3c9a63ce53f15.ico'
        />
      </div>
    )
  }
}

export default Cart;
