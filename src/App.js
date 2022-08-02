import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => {
        this.setState(() => {
          return {
            users
          }
        })
      });
  }

  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search users..' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return {
              searchField
            }
          });
        }} />
        <header className="App-header">
          <p>Here are some users,</p>
          <div className='users'>
            {
              filteredUsers.map((user) => {
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
