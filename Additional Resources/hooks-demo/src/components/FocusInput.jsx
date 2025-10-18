import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="text-center my-4">
      <h4>useRef Example</h4>
      <input ref={inputRef} type="text" placeholder="Click button to focus" className="form-control w-50 mx-auto" />
      <button className="btn btn-success mt-3" onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;