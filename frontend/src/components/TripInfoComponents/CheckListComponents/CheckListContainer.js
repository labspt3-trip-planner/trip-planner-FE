import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CheckListForm from "./CheckListForm";
import Checklist from "./Checklist";
import TodoListForm from "./TodoListForm";
import TodoList from "./TodoList";
import useChecklistState from "./useChecklistState";
import useTodoState from "./useTodoState";
import "./trip-page.css";

const Checklists = props => {
  const { lists, addList, deleteList } = useChecklistState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="lists-wrapper">
      <p className="list-label">Pre-Trip</p>
      <div className="lists-section">
        <div className="list-wrapper">
          <Typography component="h4" variant="h5">
            Packing List
          </Typography>

          <CheckListForm
            saveList={listText => {
              const trimmedText = listText.trim();

              if (trimmedText.length > 0) {
                addList(trimmedText);
              }
            }}
          />

          <Checklist lists={lists} deleteList={deleteList} />
        </div>
        <div className="list-wrapper">
          <Typography component="h4" variant="h5">
            To Do List
          </Typography>

          <TodoListForm
            saveTodo={todoText => {
              const trimmedTodoText = todoText.trim();

              if (trimmedTodoText.length > 0) {
                addTodo(trimmedTodoText);
              }
            }}
          />

          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

const mstp = state => ({
  packing: state.trips.singleTrip.packing,
  todos: state.trips.singleTrip.todos
});

export default connect(
  mstp,
  null
)(Checklists);
