import React from "react";
import { useState } from "react";

const Render = () => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      {password.length < 6 ? (
        <div>Weak Password</div>
      ) : (
        <div>Strong Password</div>
      )}
    </div>
  );
};

export default Render;