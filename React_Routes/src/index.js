import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';



class Home extends Component{
  render(){
    return(
      <div>
        <p onClick={() => this.props.history.push('/')}>Home</p>
        <p onClick={() => this.props.history.push('/Happy')}>Happy</p>
        <p onClick={() => this.props.history.push('/Sleepy')}>Sleepy</p>
        <p onClick={() => this.props.history.push('/Guilty')}>Guilty</p>
      </div>
    )
  }
}

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Home} />
        <Route path="/Happy" component={ Happy } />
        <Route path="/Sleepy" component={ Sleepy } />
        <Route path="/Guilty" component={ Guilty } />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( <Root />, document.getElementById('root') );
