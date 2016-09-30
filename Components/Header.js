import React from 'react';
import SearchBar from './SearchBar'
import Cart from './Cart'

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  var image = {
    width: '30vw',
    height: '17vh'
  }
  var nonImage = {
     display: 'flex',
     alignItems: 'center',
     flexDirection: 'column',
     width: '15vw',
  }
  var shadow = {
    boxShadow: '10px 21px 55px -10px rgba(0,0,0,0.75)'
  }
  var noMarg = {
    margin: 0,
    fontSize: '12px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#3F61E0',
    color:'white',
    height: '4vh',
    boxShadow: '10px 10px 10px -10px rgba(0,0,0,0.75)'
  }
  var heads = {
      display: 'flex',
      fontSize: '40px',
      flexDirection: 'row',
      backgroundColor: '#F2CB05',
      borderColor: '#3F61E0',
      borderStyle: 'solid',
      borderWidth: '10px',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90vw',
      height: '25vh',
      marginBottom: '10px',
      marginTop: '10px',
      borderRadius: '15px',
      boxShadow: '10px 10px 55px -10px rgba(0,0,0,0.75)'
    }
    return (
      <div style={heads}>
        <SearchBar HandleChange={this.props.HandleChange} MySearch={this.props.MySearch} style={shadow}/>
        <img style={image} src='http://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-Pic.png'/>
        <div style={nonImage}>
          <Cart CheckOut={this.props.CheckOut}/>
          <button onClick={()=>(this.props.CheckOut(event))} style={noMarg}>Check Out ({this.props.cart})</button>
        </div>
      </div>
    )
  }
}

export default Header;
