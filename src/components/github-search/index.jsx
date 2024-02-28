import { useState } from "react";
import { useEffect } from "react";

export default function GitHubSearch() {
  const [user, setUser] = useState("lucasmontecino");
  const [loading, setLoading] = useState(false);

  async function fetchUserData() {
    try {
      setLoading(true);

      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." name="user-name-search" />
        <button>Search</button>
      </div>
    </div>
  );
}
