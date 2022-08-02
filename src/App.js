import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { first: 'Rajesh', last: 'Siva' },
      company: 'Stats',
      companies: [{
        name: 'Logiware'
      }, {
        name: 'Azureiken'
      }, {
        name: 'Ameex'
      }],
      users: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
      this.setState(()=> {
        return {
          users: users
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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

          <p>Companies I worked before are,</p>
          <div className="companies">
            {
              this.state.companies.map((company) => {
                return <h1>{company.name}</h1>
              })
            }
          </div>
          <p>Here are some users,</p>
          <div className='users'>
            {
              this.state.users.map((user) => {
                return <h3 id={user.id}>{user.name}</h3>
              })
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
