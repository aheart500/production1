import React from 'react';
import Header from './Components/Header'
import MemeGenerator from './Components/MemeGenerator'
import './App.css';

class App extends React.Component{
  render(){
    const JSX = (
      <div className='app-class'>
        <Header />
        <MemeGenerator />
      </div>
    );
    return JSX
  }
}
export default App;
