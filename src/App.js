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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField
      }
    });
  };

  render() {

    const { users, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <input className='search-box'
          type='search'
          placeholder='search users..'
          onChange={onSearchChange}
        />
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
