import React from "react";
// import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

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
			{/* <TextField
				variant="outlined"
				placeholder="Add another..."
				margin="normal"
				onChange={onChange}
				value={value}
			/> */}
			<input
				className="input"
				variant="outlined"
				placeholder="Add another..."
				margin="normal"
				onChange={onChange}
				value={value}
			/>
		</form>
	);
};

export default ListForm;
