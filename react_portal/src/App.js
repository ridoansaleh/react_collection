import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";
import "./long_modal.css";

function App() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const Content = () => {
    return (
      <div className="content">
        <div onClick={() => setModalDisplay(false)}>Close</div>
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal Content Modal
        Content Modal Content Modal Content Modal Content Modal
      </div>
    );
  };

  return (
    <div className="App">
      <button onClick={() => setModalDisplay(true)}>Show Pop Up</button>
      <Modal isDisplay={modalDisplay}>
        <Content />
      </Modal>
    </div>
  );
}

export default App;
