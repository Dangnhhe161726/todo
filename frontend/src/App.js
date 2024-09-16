import React, { useState, useEffect } from "react";
import Login from "./component/Login.js";
import ListUser from "./component/ListUser.js";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="App">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <ListUser token={token} />
        </div>
      )}
    </div>
  );
}

export default App;
