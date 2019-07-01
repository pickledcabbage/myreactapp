import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm'


class App extends React.Component
{
  constructor(props){
    super();
    this.title = props.title;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <NameForm />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
