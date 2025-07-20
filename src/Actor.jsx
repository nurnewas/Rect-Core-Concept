export default function Actor({name, age = 30}) {

  return (
    <>
      <h2>Actor: {name}</h2>
      <p>Age: {age}</p>
    </>
  );
}
