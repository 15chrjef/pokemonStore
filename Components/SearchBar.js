  import React from 'react';
class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var style = {
      height: '3vh',
      width: '14vw',
      borderRadius: '5px',
      boxShadow: '10px 10px 10px -10px rgba(0,0,0,0.75)',
      marginTop: '40px'
    }
    var myStyle = {
      width: '6vw',  
      height: '4vh',
      borderRadius: '5px',
      marginTop: '20px',
      boxShadow: '10px 10px 10px -10px rgba(0,0,0,0.75)',
      cursor: 'pointer',
      outline:'none',
      backgroundColor: '#3F61E0',
      color:'white',
      fontSize: '13px',
    }
    var flex={
      display:'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
    return(
      <div style={flex}>
        <input 
          onChange={this.props.HandleChange} 
          style={style} 
          type='text' 
          placeholder='Search... '
        />
        <button 
          onClick={function(){
            setTimeout(this.props.MySearch, 200)}
            .bind(this)} 
          style={myStyle}>Search
        </button>
      </div>
    ) 
  }
}

export default SearchBar;
