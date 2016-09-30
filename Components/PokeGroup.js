import React from 'react'
import Pokemon from './Pokemon.js'


export default class PokeGroup extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      var self = this;
      return(
        <div style={this.props.styleMe}>
          {[1,1,1,1].map((item,i) => (
            <Pokemon 
              key={i} 
              Creator={this.props.Creator} 
              addMe={this.props.addMe} 
            />
          ))} 
        </div>
      )
    }
}  
    