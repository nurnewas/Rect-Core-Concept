import "./App.css";
import Todo from "./todo.jsx";

function App() {
  return (
    <>
      <h1>Hello</h1>

      <Todo task="learning React:" isDone={false} />
      <Todo task="learning React:" isDone={true} />
      <Todo task="learning React:" isDone={false} />
      <Todo task="learning React:" isDone={true} />
    </>
  );
}

export default App;
