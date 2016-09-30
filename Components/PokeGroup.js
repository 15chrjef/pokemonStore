import React from 'react'
import Pokemon from './Pokemon.js'


export default class PokeGroup extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      return(
        <div style={this.props.styleMe}>
          <Pokemon Creator={this.props.Creator} addMe={this.props.addMe} />
          <Pokemon Creator={this.props.Creator} addMe={this.props.addMe} />
          <Pokemon Creator={this.props.Creator} addMe={this.props.addMe} />
          <Pokemon Creator={this.props.Creator} addMe={this.props.addMe} />
        </div>
      )
    }
}  
    