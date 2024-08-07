import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({show, onClose, children, title}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const modalContent = show ? (
    <div className="w-full h-full bg-black bg-opacity-70 flex flex-col justify-center 
    fixed top-0 left-0">
        <div className="bg-white md:w-3/5 md:h-4/5 self-center p-5 z-50 h-full w-full">
          <div className="w-full flex justify-end">
            <button href="#" onClick={(e) => {
                e.preventDefault();
                onClose();
            }} className="text-sm">Close</button>
          </div>
          <div className="flex flex-col gap-2">
            {title && <h2 className="font-semibold text-2xl">{title}</h2>}
            <div className="flex flex-col gap-1">{children}</div>
          </div>
        </div>
    </div>
  ): null;
  if(isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  }
  else{
    return null;
  }
}

export default Modal