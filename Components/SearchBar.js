  import React from 'react';
class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var style = {
      fontFamily: 'Tahoma, Geneva, sans-serif ',
      marginTop: '20px',
      marginRight: '1px',
      height: '3.5vh',
      width: '14vw',
      paddingLeft:'15px',
      borderRadius:'6px',
      border:'none',
      color:'#F2F2F2',
      fontSize:'11px',
      color: 'black',
      backgroundColor:'#fffbf8',
      outline: 'none',
      boxShadow:
      `0 1px 1px 0 rgba(199, 199, 199, 0.55),
            0 2px 2px 1px black,
            0 -1px 1px 0 #f2f2f2 inset,
            0 15px 15px 0 rgba(41, 41, 41, 0.09) inset`
    }

    var myStyle = {
      marginTop: '30px',
      fontSize:'14px',
      fontFamily: 'Tahoma, Geneva, sans-serif ' 
    }

    var flex={
      display:'flex',
      alignItems: 'center',
      flexDirection: 'row',
      verticalAlign: 'middle'
    } 
    return(
      <form 
      onSubmit={(event) => {
          setTimeout(() => this.props.MySearch(event), 200)
          event.target.value = ''
        }} 
      style={flex}
      >
        <input 
          onChange={this.props.HandleChange} 
          style={style} 
          type='text' 
          placeholder='Search... '
          value = {this.props.input}
        />
        <button 
          className='hvr-fade'
          style={myStyle}
        >Go!
        </button>
      </form>
    ) 
  }
}

export default SearchBar;
