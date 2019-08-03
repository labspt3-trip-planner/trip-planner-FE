import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addTodo } from "../../../store/actions/listActions";

const ListForm = props => {
  const [newItem, setNewItem] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    console.log(newItem);
    props.addTodo(newItem);
    setNewItem("");
  };

  const changeHandler = e => {
    setNewItem(e.target.value);
    console.log(e.target.value);
  };

  const InputProps = {
    onChange: changeHandler
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        placeholder="Add another..."
        margin="normal"
        InputProps={InputProps}
        value={newItem}
      />
    </form>
  );
};

const mdtp = () => {
  return {
    addTodo
  };
};

export default connect(
  null,
  mdtp
)(ListForm);