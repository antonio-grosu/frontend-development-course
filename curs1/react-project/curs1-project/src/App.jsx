import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <h2 className="font-semibold text-2xl">Button Clicker</h2>
      <p>You clicked the button {counter} times</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="px-4 py-2 rounded-md bg-green-300 font-semibold text-black"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
