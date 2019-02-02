import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.scss';
import Service from './service.js';
import {AppInput} from "./AppInput";
import {AppDisplayCats} from "./AppDisplayCats";

/*
  GetImage ==> Service.getImageItems(number)
*/

class App extends Component {
  constructor(){
    super()
    this.state = {
      amountOfImage : "",
      isLoading : false,
      cats : {},
      loadStatus : ""
    }
  }

  onChangeAmountOfImage = (e) =>{
    if(this.isInputValidated(e.target.value)){
      this.setState({amountOfImage : e.target.value})
    }
  }

  isInputValidated(amountOfImage){
    if (isNaN(amountOfImage)) return false;
    if (amountOfImage.includes("-") || amountOfImage.includes(".") || amountOfImage.includes('\\')) return false;
    return true;  
  }

  onClickSubmit = async () => {
    this.setState({isLoading:true})
    try{
      const response = await Service.getImageItems(this.state.amountOfImage)
      this.setState({isLoading:false, cats:response,loadStatus:(<label className="success">SUCCESS</label>)})
    }
    catch(err){
      this.setState({isLoading:false, cats:{},loadStatus:(<label className="fail">FAILED</label>)})
    }
  }

  render() {
    console.log(this.state)
    const {amountOfImage,isLoading,cats,loadStatus} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cat Gallery</h2>
        </div>
        <AppInput onChangeAmountOfImage={this.onChangeAmountOfImage} 
                  onClickSubmit={this.onClickSubmit} isLoading={isLoading} amountOfImage={amountOfImage}/>
        {isLoading? <label className="loading">LOADING...</label>:loadStatus}
        <AppDisplayCats cats={cats}/>
      </div>
    );
  }
}

export default App;
