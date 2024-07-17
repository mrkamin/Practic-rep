import { useEffect, useRef } from "react";
import Productlist from "./components/Productlist";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <div className="mb-5">
        <Productlist />
      </div>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
