import React, { useState } from "react";

const Todo = () => {
  const [inputlist, setInputlist] = useState("");
  const [list, setList] = useState([]);
  const ChangeHandler = (e) => {
    setInputlist(e.target.value);
  };
  const click = () => {
    setList((oldval) => {
      return [...oldval, inputlist];
      setInputlist("");
    });
  };

  return (
    <div>
      <form action="">
        <div>
          <h1>Add Todo</h1>
          <br />
          <input type="text" onChange={ChangeHandler} />
          <br />
          <br />
          <button onClick={click}> +</button>
        </div>
      </form>
     < div>
      <ol>
        {list.map((itemval) => {
          return <li>{itemval}</li>;
        })}
      </ol>
      </div>
    </div>
  );
};
export default Todo;