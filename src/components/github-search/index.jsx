import { useState, useEffect } from "react";
import Card from "./card";
import "./github.css";

export default function SearchApiName() {
  const [name, setName] = useState("cute squirrel");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    fetchDataName();
  }

  function handleKeySearch(e) {
    if (e.key === "Enter") {
      fetchDataName();
    }
  }

  async function fetchDataName() {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/api/images/${name}`);
      const data = await response.json();

      if (data) {
        setData(data);
        setLoading(false);
        setName("");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDataName();
  }, []);

  if (loading) return <p>Please wait for the data !</p>;

  return (
    <div className="main-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="enter a name..."
          name="searching"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeySearch}
        />
        <button onClick={handleSearch}>Search...</button>
      </div>

      {data && <Card cardData={data} />}
    </div>
  );
}
