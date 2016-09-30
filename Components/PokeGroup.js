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
          {['','','',''].map(function(item,i){
              return <Pokemon key={i} Creator={this.props.Creator} addMe={this.props.addMe} />
            }.bind(self))
          }
        </div>
      )
    }
}  
    