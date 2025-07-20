import Actor from "./actor.jsx";
import "./App.css";
import Todo from "./todo.jsx";

function App() {
  const actors = ["John Doe", "Jane Smith", "Alice Johnson"];
  const age = [30, 25, 28];
  return (
    <>
      <h1>Hello</h1>
      {actors.map((actor) => (
        <Actor name={actor} />
      ))}
      {/* Age  */}
      {age.map((age) => (
        <Actor age={age} />
      ))}
    </>
  );
}

export default App;
