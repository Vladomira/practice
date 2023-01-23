import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(40);

    return (
        <div className="App">
            <div className="card">
                <button onClick={() => setCount((count) => count + 5)}>
                    count plus
                </button>
                <div>{count}</div>
                <button onClick={() => setCount((count) => count - 5)}>
                    count minus
                </button>
            </div>
        </div>
    );
}

export default App;
