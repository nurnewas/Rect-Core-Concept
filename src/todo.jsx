// function Todo() {
//   return (
//     <>
//       <h1>its connectes</h1>
//     </>
//   );
// }

// export default Todo;

//Conditional Rendering Example 1
// export default function Todo({ task, isDone }) {
//   if (isDone) return <h1>Task: {task} is done</h1>;
//   else return <h1>Task: {task} is not done</h1>;
// }

// conditional Rendering Example 2(using ternary operator)
// export default function Todo({ task, isDone }) {
//   return (
//     <li>{isDone ? "Tomi to miya boss" : "focus on career not oh holls"}</li>
//   );
// }

// only true if the task is done &&
export default function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone && "✅" }
    </li>
  );
}

// only true if the task is done ||
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || "❌"}
//     </li>
//   );
// }
