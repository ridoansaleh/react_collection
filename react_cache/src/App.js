import React, { useState, useRef } from "react";
import Previous from "./Previous";
import Next from "./Next";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const cache = useRef({});

  return (
    <div className="App">
      {step === 1 ? <Previous cache={cache} /> : <Next />}
      <div>
        <button
          className="prev-btn"
          disabled={step === 1}
          onClick={() => setStep((ps) => ps - 1)}
        >
          Prev
        </button>
        <button
          className="next-btn"
          disabled={step === 2}
          onClick={() => setStep((ps) => ps + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
