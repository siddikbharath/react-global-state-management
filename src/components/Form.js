import React, { useContext } from "react";
import Context from "./store/context";

const Form = () => {
  const { state, actions } = useContext(Context);

  const inputHandler = (e) => {
    actions({
      type: "setState",
      userInput: { ...state, value: e.target.value },
    });
  };

  return (
    <>
      <form action="submit">
        <input value={state.value} onChange={inputHandler} type="text" />
      </form>
    </>
  );
};

export default Form;
