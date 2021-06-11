import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Helloo from './Helloo';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
  ShortName: string;
  Designation : string;
  Address : string;
  Contact : string ;  
}

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
      <table>
      <thead>
      <tr>
      <th>
        <Hello name={this.state.name}/>
      </th>  
      {/* <th>
      <Hello name
      ={this.state.name}/>
      </th>
        </tr> */}
      </tr>
      </thead>
       </table>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
