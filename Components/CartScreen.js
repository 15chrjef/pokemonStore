import React from 'react'

export default class CartScreen extends React.Component{
  constructor(){
    super()
  }
  render(){
    var style={
      fontSize: '22px'
    }
    var font = {
      fontFamily: 'Tahoma, Geneva, sans-serif '
    }
    var buttony = {
      marginBottom: '20px',
      fontSize: '16px',
      fontFamily: 'Tahoma, Geneva, sans-serif ',
      opacity: '1'
    }
    return(
      <div className={this.props.CartClass}>
        <h2 style={font}>My Cart</h2>
        <a 
          href="#" 
          className="close-thik"
          onClick={() => this.props.CheckOut()}
        >
        </a>
        <h4 
        className='cartyCart' 
        style={style}>
          {this.props.trueCart.
            map((pokemon) => <div key={pokemon.key}>{pokemon.data}</div>
          )}
        </h4>
        <h3 style={font}>Total: ${this.props.total}</h3>
        <div style={style}>
          <button 
            onClick={() => {
              event.preventDefault()
              this.props.CheckOut()
              this.props.ClearCart()
              setTimeout(() => {
                alert('Your Pokemon will ship and be delivered in two to three weeks!')
              }, 200)
            }} 
            className="hvr-fade"
            style={buttony}>Buy Now!
          </button>
        </div>
      </div>
    )
  }

}