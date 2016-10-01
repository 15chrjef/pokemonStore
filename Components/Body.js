import React from 'react';
import PokeGroup from './PokeGroup'
import CartScreen from './CartScreen.js'
import Results from './Results.js'
class Body extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var bods = {
      display: 'flex',
      fontSize: '40px',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90vw'
    }
    var style = {
      display :  'flex',
      justifyContent: 'center'
    }
    return(
      <div>
        <div style={style}>
          <CartScreen 
            ClearCart={this.props.ClearCart} 
            total={this.props.total} 
            trueCart={this.props.trueCart} 
            CartClass={this.props.CartClass} 
            CheckOut={this.props.CheckOut}
          />
          <Results  
            className={this.props.SearchClass}           
            Creator={this.props.Creator} 
            SearchClass = {this.props.SearchClass}
            SearchResult = {this.props.SearchResult}
            addMe={this.props.addMe} 
            MySearch={this.props.MySearch}
            ClearSearch={this.props.ClearSearch}
          />
        </div>
        <div style={bods}>
          {[1,1,1,1].map((item,i) => (
            <PokeGroup 
              key={i} 
              pokemon={this.props.pokemon} 
              Creator={this.props.Creator} 
              style={this.props.styleMe} 
              addMe={this.props.addMe} 
            />))
          }
         </div>
      </div>
    )
  }
}

export default Body;
