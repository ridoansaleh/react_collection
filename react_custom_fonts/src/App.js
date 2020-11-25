import React, { useState } from "react";
import { Learn } from "./_appStyle";
import GlobalFonts from "./Fonts";

function App() {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <GlobalFonts />
      <Learn>Learn to implement Custom Fonts</Learn>
      <input
        name="city"
        placeholder="Your City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default App;
