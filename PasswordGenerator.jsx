import React, { useState } from "react";

export default function PasswordGenerator() {
  const [pass, setpass] = useState("");
  const [rangee, setrangee] = useState(15);

  let array = function () {
    let pass1 = "";
    let str = "ABCDEFGHIJKLMNOPORSTUVWXYZabcdefghiiklmnoparstuvwxyz";
    for (let i = 0; i < rangee; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass1 = pass1 + str.charAt(char);
    }
    setpass(pass1);
  };
  return (
    <div>
      <input value={pass} readOnly></input>
      <br></br>
      <input
        type="range"
        max={100}
        min={6}
        value={rangee}
        onChange={(e) => setrangee(e.target.value)}
      ></input>
      <span>{rangee}</span>
      <button onClick={array}>button</button>
    </div>
  );
}
