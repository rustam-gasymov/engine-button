import { useSelector } from "react-redux";

export const Increment = () => {
  const state = useSelector((state) => state);
  console.log(state);

  const handleClick = () => {
    console.log("hellosdsdsdsd 1111123 worlddd");
  };

  return <button onClick={handleClick}>Increment</button>;
};
