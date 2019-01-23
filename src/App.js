import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import head from './0.png';
import tail from './1.png';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state= {
			result:null,
			flip:false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		//alert('clicked');

		this.setState({...this.setState,flip:true});
		setTimeout(()=>{
			var result = Math.floor(Math.random()*Math.floor(2));
			this.setState({result,flip:false});
		},3000);
		
	}

  render() {
  	let resultText;
  	let resultImg;
  	let fliping;
    	if(this.state.result != null){
         	resultText = <h2 id="result">{this.state.result ==0 ?"Heads":"Tails"}</h2>	
         	resultImg= <img src={this.state.result ==0 ? head:tail} />
         }

         if(this.state.flip){
         	fliping = <h2>Fliping ...</h2>
         	resultImg=null;
         	resultText=null;
         }
         else {
         	fliping = "";
         }
    return (
    	

      <div className="App">
        <header className="App-header" >
         <h1> Coin Flip Simulation</h1>
         <div >
         	<br/>
         {resultImg}
         <br/>
         <br/>
         {resultText}
         <br/>
         {fliping}
         </div>
         
         
         <button type="button" class="btn btn-success" onClick={this.handleClick}>Flip Coin</button>
        </header>
      </div>
    );
  }
}

export default App;
