import { useState } from "react";
function App() {
  // let counter = 13;

  const [counter, setCounter] = useState(13);

  //method addValue created.
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter + 1);
  };
  //method removeValue created.
  const removeValue = () => {
    // counter = counter - 1;
    // console.log(counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value </button>
      <p>footer :{counter}</p>
    </>
  );
}

export default App;
/**
 * Want to have a value and change its val from the buttons provided.
 * STATE
 * Any change in state  will render the webpage
 *
 */
