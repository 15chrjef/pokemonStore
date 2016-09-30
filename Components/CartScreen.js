import React from 'react'

export default class CartScreen extends React.Component{
  constructor(){
    super()
  }
  render(){
    var style={
      fontSize: '22px'
    }
    var buttony = {
      color:'white',
      width: '90px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ABACAB',
      borderRadius: '5px',
      marginBottom: '20px'
    }
    var self = this;
    return(
      <div className={this.props.CartClass}>
        <h2>Your Cart</h2>
        <h4 className='cartyCart' style={style}>
          {this.props.trueCart.map(function(pokemon){
            return <div key={pokemon.key}>{pokemon.data}</div>
          })}
        </h4>
        <h3>Total: ${this.props.total}</h3>
        <div style={style}>
          <button onClick={function(){
            this.props.CheckOut()
            this.props.ClearCart()
            setTimeout(function(){
              alert('Your Pokemon will ship and be delivered in two to three weeks!')
            }, 200).bind(self)
          }.bind(self)} style={buttony}>Buy Now!</button>
        </div>
      </div>
    )
  }

}