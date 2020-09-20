import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import FilteredCards from './components/FilteredCards';
import AllCards from './components/AllCards';
import CardDetails from './components/CardDetails';

class App extends Component{
  constructor(){
    super()
    this.state={
      data:[],
      dateFilterApplied:false
    }
  }
  
  changeDate=(event)=>{
    event.preventDefault()
    this.setState((prevState)=>{
      return {data:prevState.data,dateFilterApplied:true}
    })
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v3/launches?limit=15')
      .then((response)=>{return response.json()})
      .then((data)=>{
        this.setState((prevState)=>{
          return {data:data,dateFilterApplied:prevState.dateFilterApplied}
        })
      })
  }

  render(){
    var element1=document.getElementById('startdate');
    var start=element1!=null?element1.value:null;
    element1=document.getElementById('enddate');
    var end=element1!=null?element1.value:null;
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='container'>
          <Route exact path='/'>
            {/* start of date section */}
            <br/>
              <div className='datesection'>
                <form name ='dateform' id='dateform' onSubmit={this.changeDate}>
                  <center>
                      <div>
                      <label for='startdate'>Start Date:</label>
                      <input value={this.state.startdate} id='startdate' name='startdate' type='date' style={date}></input>
                      </div>
                      <div>
                      <label for='enddate'>End Date:</label>
                      <input value={this.state.enddate} id='enddate' name='enddate' type='date' style={date}></input>
                      </div>
                      <div>
                      <Button type="submit" variant="primary" style={button}>Search</Button>
                      </div>
                  </center>
                </form>
              </div>
            <br/>
            {/* end of date section */}
            {/* switching between All cards and filtered Cards */}
            <div className='set'>
              {this.state.dateFilterApplied?<FilteredCards start={start} end={end}/>:<AllCards data={this.state.data}/>}
            </div>
          </Route>
          <Route path='/:id' component={CardDetails}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
const button={
  border:'1px solid black',
  padding:'7px 5px',
  width:'80px',
  backgroundColor:'#004774',
}

const date={
  border:'2px solid black',
  padding:'5px 5px',
  width:'200px',
  borderRadius:'5px',
}

export default App;
