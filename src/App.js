import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "./features/counter/counterSlice";

export const App = () => {
  const state = useSelector(selectCount);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div>hi</div>;
};
