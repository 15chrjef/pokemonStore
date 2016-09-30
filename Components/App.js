import React from 'react';
import Body from './Body'
import Header from './Header'
var pokes = [['ivysaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 142],
['squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 63],
['bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 64],
['charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 62],
['charmeleon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 142],
['kakuna', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png', 72],
['venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 236],
['beedrill', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png', 178],
['pidgeot', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png', 216],
['caterpie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', 39],
['charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 240],
['metapod', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', 72],
['fearow', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png', 155],
['ekans', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png', 58],
['wartortle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', 142],
['butterfree', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', 178],
['raticate', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', 145],
['weedle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png', 39],
['sandslash', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png', 158],
['pidgey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png', 50],
['sandshrew', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png', 60],   
['arbok', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png', 153],
['jolteon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png', 184],
['ditto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', 101],
['blastoise', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', 239],
['flareon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png', 184],
['vaporeon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png', 184],
['snorlax', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', 189],
['omastar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png', 173],
['dratini', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png', 60],
['aerodactyl', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png', 180],
['mew', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', 270],
['paras', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png', 57],
['nidoqueen', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png', 227],
['persian', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png', 154],
['poliwag', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png', 60],
['rapidash', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png', 175],
['gloom', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png', 138],
['victreebel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png', 221],
['machamp', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png', 227],
['machop', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png', 61],
['nidoking', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png', 227],
['parasect', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png', 142],
['mankey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png', 61],
['golbat', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png', 159],
['machoke', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png', 142],
['nidorino', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png', 128],
['golduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png', 175],
['clefable', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png', 217],
['jigglypuff', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', 95],
['meowth', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', 58],
['golem', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png', 223],
['vileplume', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png', 221],
['nidorina', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png', 128],
['oddish', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png', 64],
['dugtrio', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png', 142],
['wigglytuff', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png', 196],
['tentacruel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png', 180],
['venomoth', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png', 158],
['venonat', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png', 61],
['abra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png', 62],
['kadabra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png', 140],
['weepinbell', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png', 137],
['poliwrath', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png', 230],
['diglett', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png', 53],
['ninetales', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png', 177],
['graveler', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png', 137],
['vulpix', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png', 60],
['psyduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', 64],
['dodrio', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png', 161],
['slowbro', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png', 172],
['seel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png', 65],
['shellder', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png', 61],
['magnemite', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png', 65],
['slowpoke', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png', 63],
['dewgong', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png', 166],
['farfetchd', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png', 123],
['doduo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png', 62],
['grimer', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png', 65],
['gastly', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png', 62],
['muk', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png', 175],
['magneton', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png', 163],
['cubone', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png', 64],
['drowzee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png', 66],
['gengar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', 225],
['haunter', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png', 142],
['exeggutor', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png', 182],
['kingler', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png', 166],
['voltorb', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png', 66],
['hypno', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png', 169],
['exeggcute', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png', 65],
['lickitung', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png', 77],
['hitmonchan', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png', 159],
['hitmonlee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png', 159],

['kangaskhan', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png', 172],
['rhyhorn', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png', 69],
['koffing', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png', 68],
['seaking', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png', 158],
['rhydon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png', 170],
['lapras', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png', 187],
['chansey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png', 395],
['horsea', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png', 59],
['staryu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png', 68],
['seadra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png', 154],
['goldeen', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png', 64],
['scyther', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png', 100],
['jynx', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png', 159],
['tauros', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png', 172],
['gyarados', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png', 189],
['tangela', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png', 87],
['starmie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png', 182],
['weezing', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png', 172],
['pinsir', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png', 175],
['electabuzz', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png', 172],

['eevee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', 65],
['dragonite', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png', 270],
['porygon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png', 79],
['kabuto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png', 71],
['moltres', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png', 261],
['aerodactyl', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png', 180],
['omastar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png', 173],
['articuno', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png', 261],
['zapdos', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png', 261],
['mewtwo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', 306],
['dragonair', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png', 147],
['kabutops', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png', 173],
['pikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 112],
]

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      cartCount: 'My Cart',
      total: 0,
      pokemon: {},
      search: 'Search...',
      cartClass: 'cartHide',
      trueCart: []
    }
  }
  Creator(){
    var myPoke = pokes[Math.floor(Math.random() * pokes.length)]
    return myPoke
  }
  ClearCart(){
    this.setState({
      cartCount: 'My Cart',
      total: 0,
      pokemon: {},
      search: 'Search...',
      cartClass: 'cartHide',
      trueCart: []
    })
  }
  AddPokemon(event,price, poke){
    event.preventDefault()
    var myPoke = poke.slice(0,1).toUpperCase() + poke.slice(1);
    var storage = {}
    Object.assign(storage, this.state.pokemon)
      if(storage[myPoke]){
        storage[myPoke] ++
      }else{
        storage[myPoke] = 1;
      } 
    var newCart = [];
      for(var key in storage){
        var obj = Object.create(
          Object.prototype, { 
            data:{writable: true, configurable: true, value: storage[key] + 'x of ' + key},
            key:{writable: true, configurable: true, value:key + storage[key]}
          })
        newCart.push(obj)
      }
    //var string = 
    // var newCart = this.state.trueCart.slice()
    // newCart.push(string)
    // console.log('newCart', newCart)
    this.setState({
      cartCount: typeof this.state.cartCount == 'number' ? this.state.cartCount + 1 : 1,
      total: this.state.total + price,
      pokemon: storage,
      trueCart: newCart
    })  
  }
  CheckOut(event){
    if(this.state.cartClass === 'cartHide'){
      this.setState({
        cartClass: 'cartScreen'
      })
    }
    else{
      this.setState({
        cartClass: 'cartHide'
      })
    }
  }
  MySearch(){
      var self = this;
      var name = this.state.search
      var searchName = name.toLowerCase()
      for(var i = 0; i < pokes.length; i++){
        if( pokes[i] && searchName === pokes[i][0]){
          return alert(pokes[i][0] + ' is available for purchase!')
        }
      }
      return alert('Sorry, we do not have any ' + name)
    }
  HandleChange(event){
    var self = this;
    this.setState({
      search: event.target.value
    })
  }
  render(){
    var appy = {
      display:'flex',
      flexDirection: 'Column',
      border: '15px solid #3F61E0',
      borderRadius: '15px',
      width: '95vw',
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      boxShadow: '10px 21px 55px -10px rgba(0,0,0,0.75)'
    }
    return (
      <div style={appy}>
        <Header CheckOut={this.CheckOut.bind(this)} HandleChange={this.HandleChange.bind(this)} MySearch={this.MySearch.bind(this)} CheckOut={this.CheckOut.bind(this)} cart={this.state.cartCount}/>
        <Body ClearCart={this.ClearCart.bind(this)} Creator={this.Creator.bind(this)} total={this.state.total} pokemon={this.state.pokemon} trueCart={this.state.trueCart} CartClass={this.state.cartClass} CheckOut={this.CheckOut.bind(this)} addMe={this.AddPokemon.bind(this)}/>
      </div>
    )
  }
}

export default App;


