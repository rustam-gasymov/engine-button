export const Increment = () => {
  const handleClick = () => {
    console.log("hello world");
    //@ts-ignore
    // dispatch(setDecrementValue());
  };

  return <button onClick={handleClick}>Increment</button>;
};
