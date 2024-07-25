import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-5">
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-item">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
