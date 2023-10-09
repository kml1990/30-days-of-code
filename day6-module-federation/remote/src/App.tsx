import Button from "./Button";

import "./App.css";
import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className="App">
        <h1>Remote Application</h1>
        <Button />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
