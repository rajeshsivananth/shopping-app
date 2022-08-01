import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { first: 'Rajesh', last: 'Siva' },
      company: 'Stats'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hey {this.state.name.first} {this.state.name.last}. I work at {this.state.company}</p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {
                  first: 'Magizh',
                  last: 'Rajesh'
                }
              }
            }, () => {
              console.log(this.state);
            });
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
