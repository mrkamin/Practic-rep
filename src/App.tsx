import axios from "axios";

function App() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data));
  return (
    <>
      <div className="mb-5"></div>
    </>
  );
}

export default App;
