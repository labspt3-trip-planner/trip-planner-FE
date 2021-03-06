import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 1,
    marginRight: 1
  }
}));

function OutlinedTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        name="tripName"
        value={props.nameValue}
        id="outlined-full-width"
        onChange={props.nameHandler}
        label="New Trip"
        style={{ margin: 8 }}
        placeholder="Trip Name..."
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}

export default OutlinedTextFields;
