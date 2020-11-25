// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [activeImage, setActiveImage] = useState("");

  const handleFileUpload = (e) => {
    console.log(e.target.files);

    const img = e.target.files[0];

    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    let imageString = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    localStorage.setItem("imageString", imageString);

    // console.log("hello");

    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onload = function () {
    //   const base64 = reader.result.split(",")[1];
    //   localStorage.setItem("imageString", base64);
    // };
  };

  const handleShowImage = () => {
    // setActiveImage(localStorage.getItem("imageString"));
    const photoEl = document.getElementById("photo");
    var dataImage = localStorage.getItem("imageString");
    photoEl.scr = "data:image/png;base64," + dataImage;
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleShowImage}>Show My Image</button>
      <img src="" id="photo" />
      {/* {activeImage && <img src={activeImage} />} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
