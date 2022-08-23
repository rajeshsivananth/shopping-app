import { Component } from "react";
import Card from "../card/card.component";

const CardList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </div>
  );
};

export default CardList;
