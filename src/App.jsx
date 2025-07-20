import "./App.css";
import Todo from "./todo.jsx";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Todo />
      <Todo />
      <Todo task="Learn React" isDone={false} />
      <Todo task="Learn React" isDone={true} />
    </>
  );
}

export default App;
