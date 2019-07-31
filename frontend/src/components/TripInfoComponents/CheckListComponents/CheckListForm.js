import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import { connect } from "react-redux";
import { updateList } from "../../../store/actions/listActions";

const ListForm = ({ saveList }) => {
  const { value, reset, onChange } = useInputState("");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveList(value);
        
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add another..."
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default connect(
  null,
  { updateList }
)(ListForm);
