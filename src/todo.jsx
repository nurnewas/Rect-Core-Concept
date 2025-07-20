// function Todo() {
//   return (
//     <>
//       <h1>its connectes</h1>
//     </>
//   );
// }

// export default Todo;

export default function Todo({ task, isDone }) {
  if (isDone) return <h1>Task: {task} is done</h1>;
  else return <h1>Task: {task} is not done</h1>;
}
