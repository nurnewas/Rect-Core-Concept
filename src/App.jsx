import "./App.css";
import Todo from "./todo.jsx";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Todo />
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <>
      <div className="device">
        <h2> This is a device</h2>
        <p>This is a smart device</p>
        <i>Let's make life easier</i>
      </div>
    </>
  );
}

function Person() {
  return (
    <div className="person">
      <h2> This is Nur Newas</h2>
      <p>I am the king of my kingdom</p>
    </div>
  );
}

export default App;
