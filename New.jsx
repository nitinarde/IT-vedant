import React, { useState } from "react";

export default function New() {
  let [counter, upcounter] = useState(0);

  const array = function () {
    return upcounter(counter + 1);
  }

  return (
    <div>
      <h1>Value {counter} </h1>
      <button onClick={array}>update value</button>
    </div>
  );
}
