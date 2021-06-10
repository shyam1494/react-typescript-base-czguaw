import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
  Short Name :string;
  Designation : string;
  Address : string;
  Contact : string ;  



class App extends Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      name: 'POLARIS DRINKS'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name}
               s 
                 />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
