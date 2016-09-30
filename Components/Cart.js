import React from 'react';
class Cart extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var image={
      width: '6vw',
      height: '6wh'
    }
    return (
      <div onClick={this.props.ToggleCart}>
        <img onClick={this.props.ToggleCart} style={image} src='http://ecommercepartners.net/blog/wp-content/uploads/2013/03/11954275791751619642cart_pommi_02.svg_.hi_-300x244.png'/>
      </div>
    )
  }
}

export default Cart;
