import React, { useState } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const List = props => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (inputValue) {
      const item = { item: inputValue };
      console.log(item);
      setInputValue("");
      props.addItem(item);
    } else return;
  };

  const changeHandler = e => {
    setInputValue(e.target.value);
  };
  return (
    <div className="list-wrapper">
      <Typography component="h4" variant="h5">
        {props.listName}
      </Typography>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={changeHandler}
        />
      </form>
      <ul>
        {props.list.map((item, index) => {
          return (
            <div className="list-item-container" key={index}>
              <li
                className={item.done ? "complete" : "incomplete"}
                onClick={() => props.toggleDone(item)}
              >
                <p>{item.item}</p>
              </li>
              <button onClick={() => props.deleteItem(item)}>
                <DeleteIcon />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
