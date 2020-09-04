import { useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal(props) {
  const el = document.createElement("div");

  useEffect(() => {
    if (props.isDisplay) {
      modalRoot.style.display = "block";
      modalRoot.appendChild(el);
    } else {
      modalRoot.style.display = "none";
    }
  }, [el, props.isDisplay]);

  useLayoutEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < modalRoot.childNodes.length; i++) {
        if (i !== modalRoot.childNodes.length - 1) {
          modalRoot.removeChild(modalRoot.childNodes[i]);
        }
      }
    });
  }, [props.isDisplay]);

  return ReactDOM.createPortal(props.children, el);
}

export default Modal;
