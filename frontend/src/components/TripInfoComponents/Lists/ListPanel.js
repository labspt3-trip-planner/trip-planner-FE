import React from "react";
import List from "./List";
// import "../CheckListComponents/trip-page.css";

const ListPanel = props => {
	return (
		<div className="lists-wrapper">
			<p className="list-label">Pre-Trip</p>
			<div className="lists-section">
				<List
					listName="Packing List"
					list={props.packingList}
					type="packing"
					toggleDone={props.togglePacking}
					addItem={props.addPacking}
				/>
				<List
					listName="To Do List"
					list={props.todoList}
					type="todos"
					toggleDone={props.toggleTodos}
					addItem={props.addTodo}
				/>
			</div>
		</div>
	);
};

export default ListPanel;
