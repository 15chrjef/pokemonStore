import React from 'react'; 
class Results extends React.Component {
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
    backgroundColor: '#F2CB05',
    width: '90vw',
    height: '90vh',
    display: 'text',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '8px',
    marginBottom: '15px',
    borderRadius: '15px',
    boxShadow: '10px 21px 55px -10px rgba(0,0,0,0.75)'
   }
   var hand={
    cursor: 'pointer'
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
        <button style={hand} data={this.state.mon} onClick={()=>this.props.addMe(event,this.state.mon[2],this.state.mon[0])}>Add to Cart</button>
      </div>
    )
  }
}

export default Results;
