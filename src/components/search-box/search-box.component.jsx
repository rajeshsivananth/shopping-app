import { Component } from "react";

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
