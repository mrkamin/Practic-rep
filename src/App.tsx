import { useEffect, useState } from "react";
import Productlist from "./components/Productlist";

function App() {
  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");
  useEffect(() => {
    connect();
    return () => disconnect();
  });
  const [category, setCategory] = useState("");
  return (
    <>
      <div className="mb-5">
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clouthing">Clouthing</option>
          <option value="Household">Household</option>
        </select>
        <Productlist category={category} />
      </div>
    </>
  );
}

export default App;
