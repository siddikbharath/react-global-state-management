import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({ value: "Siddik Bharath", list: [] });

  const actions = (action) => {
      console.log(action);
    const { type, userInput } = action;

    switch (type) {
      case "setState":
        return setState(userInput);
      default:
        return state;
    }
  }
  return { state, actions }
};

export default useGlobalState;