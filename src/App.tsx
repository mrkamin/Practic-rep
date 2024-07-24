import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
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
