import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
