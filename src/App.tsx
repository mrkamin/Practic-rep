import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoding(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoding(false);
      });
    return () => controller.abort();
  }, []);

  const onDeleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "Rafi" };
    setUsers([newUser, ...users]);
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoding && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={addUser}>
        Add
      </button>
      <div className="mb-5 p-3">
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}{" "}
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteUser(user)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
