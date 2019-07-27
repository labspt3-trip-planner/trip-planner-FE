import { useState } from "react";

export default initialTodoValue => {
	const [todos, setTodos] = useState(initialTodoValue);

	return {
		todos,
		addTodo: todoText => {
			setTodos([...todos, todoText]);
		},
		deleteTodo: todoIndex => {
			const newTodo = todos.filter((_, index) => index !== todoIndex);
			setTodos(newTodo);
		}
	};
};
