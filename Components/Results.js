import React from 'react'; 
class Pokemon extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var pokedata = this.props.SearchResult || [['fad'],['fad'],['fad']]
    var name = (pokedata[0][0].toUpperCase() + pokedata[0].slice(1)) 
    var border ={
    borderStyle: 'solid',
    borderColor: '#3F61E0',
    borderWidth: '8px',
    backgroundColor: '#F2F2F2',
    width: '68vw',
    height: '100vh',
    display: 'text',
    textAlign: 'center',
    fontSize: '50px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '15px',
    boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.75)',
    fontFamily: 'Tahoma, Geneva, sans-serif ' 
   }
   var hand={
    fontFamily: 'Tahoma, Geneva, sans-serif ',
    marginTop: '30px',
    marginBottom: '25px',
    height: '7vh',
    width: '20vw'
   }
    var imgSize = {
      height: '50vh',
      width: '50vw'
    }
    return (
      <div className={this.props.SearchClass} style={border}>   
        <img style={imgSize} src={pokedata[1]} />
        <div>
          {name}
        </div>
        <div>
          Price: ${pokedata[2]}
        </div>
        <button 
          className='hvr-fade'
          style = {hand}
          data={pokedata} 
          onClick={
            () => {
              if(pokedata){
                return this.props.addMe(event,pokedata[2], pokedata[0])
              }
              return ''
            }
          }
        >Add to Cart
        </button>
        <button 
           onClick={() => this.props.ClearSearch()}
          className='butty'
          style = {hand}
        >Clear  
        </button>
      </div>
    )
  }
}

export default Pokemon;
