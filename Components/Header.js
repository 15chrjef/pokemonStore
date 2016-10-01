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
    height: '17vh',
    marginBottom: '20px',
    marginTop: '10px',
  }
  var font={
    fontSize:'16px',
    fontFamily: 'Tahoma, Geneva, sans-serif ',
    width: '100px',
    height: '130px',
    color: 'black',
    borderStyle: 'none',
    fontWeight: 'bold'
  }
  var nonImage = {
     display: 'flex',
     alignItems: 'center',
     flexDirection: 'column',
     width: '15vw',
     height:'120px'
  }
  var shadow = {
    boxShadow: '10px 21px 55px -10px rgba(0,0,0,0.75)'
  }
  var heads = {
      display: 'flex',
      fontSize: '20px',
      flexDirection: 'row',
      backgroundColor: '#F2F2F2',
      borderColor: '#3F61E0',
      borderStyle: 'solid',
      borderWidth: '10px',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '85vw',
      height: 'auto',
      marginBottom: '10px',
      marginTop: '10px',
      borderRadius: '15px',
      boxShadow: '4px 3px 5px 0px rgba(0,0,0,0.75)'
  }
    return (
      <div style={heads}>
        <SearchBar 
          HandleChange={this.props.HandleChange} 
          MySearch={this.props.MySearch} 
          style={shadow}
          input={this.props.input}
        />
        <img style={image} src='http://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-Pic.png'/>
        <div style={nonImage}>
          <button 
            onClick={()=>(this.props.CheckOut())} 
            className ='hvr-fade'
            style={font}
          >
          <Cart CheckOut={this.props.CheckOut}/>{this.props.cart}
          </button>
        </div>
      </div>
    )
  }
}

export default Header;
