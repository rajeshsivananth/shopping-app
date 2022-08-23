import { Component } from "react";

const Card = ({ user }) => {
    const { id, name, email } = user;
    return (
        <div key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;