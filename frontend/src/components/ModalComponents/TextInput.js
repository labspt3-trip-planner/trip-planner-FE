import React from "react";
import { makeStyles } from "@material-ui/styles";
// import TextField from "@material-ui/core/TextField";

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
			<input
				id="login-modal"
				className="input"
				type="text"
				name="tripName"
				maxLength="35"
				placeholder="Trip Name"
				value={props.nameValue}
				onChange={props.nameValue}
				label="New Trip"

				// name="tripName"
				// value={props.nameValue}
				// id="outlined-full-width"
				// onChange={props.nameHandler}
				// label="New Trip"
				// style={{ margin: 8 }}
				// placeholder="Trip Name..."
				// fullWidth
				// margin="normal"
				// variant="outlined"
				// InputLabelProps={{
				// 	shrink: true
				// }}
			/>
		</form>
	);
}

export default OutlinedTextFields;
