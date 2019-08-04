import React, { useState } from "react";
// import { connect } from "react-redux";
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
						<li
							className={item.done ? "complete" : "incomplete"}
							key={index}
							onClick={() => props.toggleDone(item)}
						>
							<p>{item.item}</p>
							<button>
								<DeleteIcon />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
