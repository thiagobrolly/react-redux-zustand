import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  );
}
