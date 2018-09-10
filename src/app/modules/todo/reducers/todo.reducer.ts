import { Todo } from '../models/todo';
import { TodoActionTypes } from '../actions/todo.actions';

export function todoReducer(state: Todo[] = [], action) {
  switch (action.type) {
    case TodoActionTypes.LoadTodos:
      return [...state];
    case TodoActionTypes.LoadTodosSuccess:
      return [...state, ...action.payload];
    case TodoActionTypes.AddTodo:
      return [...state];
    case TodoActionTypes.AddTodoSuccess:
      return [...state, ...action.payload];
    case TodoActionTypes.DeleteTodo:
      return [...state];
    case TodoActionTypes.DeleteTodoSuccess:
      return deleteTodo(state, action);
    case TodoActionTypes.EditTodo:
      return [...state];
    case TodoActionTypes.EditTodoSuccess:
      return updateTodo(state, action);
    default:
      return state;
  }
}

function deleteTodo(todos, action) {
  return todos.filter(todo => todo.id !== action.payload);
}

function updateTodo(todos, action) {
  return todos.map((todo) => {
    if (todo.id !== action.payload.id) {
      return todo;
    }
    return {
      ...todo,
      ...action.payload
    };
  });
}
