import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox placeholder="Search users.." className="search-box" onChangeHandler={onSearchChange}/>
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
