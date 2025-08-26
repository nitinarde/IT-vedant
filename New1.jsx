import React from "react";

export default function New2() {
  let counter = 15;

  const addvalue = () => {
    counter = 1 + counter;
    console.log(counter);
  };

  const removevalue = () => {
    counter = counter - 1;
    console.log(counter);
  };

  return (
    <div>
      <h1>React vite app</h1>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove value</button>
    </div>
  );
}
