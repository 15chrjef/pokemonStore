import React from 'react'; 
class Pokemon extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      mon: this.props.Creator()
    }
  }
  render(){
    var name = this.state.mon
    var rname = (name[0][0].toUpperCase() + name[0].slice(1))
    var border ={
    borderStyle: 'solid',
    borderColor: '#3F61E0',
    borderWidth: '8px',
    backgroundColor: '#F2F2F2',
    width: '17vw',
    height: '25vh',
    display: 'text',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '15px',
    boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.75)',
    fontFamily: 'Tahoma, Geneva, sans-serif ' 
   }
   var hand={
    fontFamily: 'Tahoma, Geneva, sans-serif ',
    marginTop: '8px',
    marginBottom: '25px',
   }
    var imgSize = {
      height: '10vh',
      width: '10vw'
    }
    return (
      <div style={border}>   
        <img src={this.state.mon[1]} />
        <div>
          {rname}
        </div>
        <div>
          Price: ${this.state.mon[2]}
        </div>
        <button 
          className='hvr-fade'
          style = {hand}
          data={this.state.mon} 
          onClick={
            () => this.props.addMe(event,this.state.mon[2],this.state.mon[0])}
        >Add to Cart
        </button>
      </div>
    )
  }
}

export default Pokemon;
