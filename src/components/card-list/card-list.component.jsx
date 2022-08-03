import { Component } from "react";

class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return <h1 key={user.id}>{user.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
