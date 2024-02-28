import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

export default function GitHubSearch() {
  const [user, setUser] = useState("lucasmontecino");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
    setUser(e.target.value);
  }

  function handleSearch() {
    fetchUserData();

    setInput("");
  }

  async function fetchUserData() {
    try {
      setLoading(true);

      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (data) {
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading, Please wait !</p>;
  }

  console.log(user);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          name="user-name-search"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {user && <Card user={user} />}
    </div>
  );
}
