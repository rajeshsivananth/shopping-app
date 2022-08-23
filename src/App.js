import { Component, useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => {
        setUsers(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1>Hello Monsters</h1>
      <SearchBox
        placeholder="Search users.."
        className="search-box"
        onChangeHandler={onSearchChange} />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;
