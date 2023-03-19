import { useState } from "react";
import childComponent from "./childComponent";

const useCallbackFn = () => {
  const [counter, setCounter] = useState(0);
  const onChangeHandler = () => {
    console.log("onChangeHandler called");
  };
  const onClickHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <span> Please enter input</span>{" "}
      <input type="text" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Click me{" "}
      </button>
      <br />
      <br />
      <div>Coutner value :{counter}</div>
    </>
  );
};

export default useCallbackFn;
