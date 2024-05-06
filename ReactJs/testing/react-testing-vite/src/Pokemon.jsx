import React, { useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [error, setError] = useState(null);

  const FetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setAbilities(data.abilities); // Store abilities if found
      setError(null); // Clear any previous error
    } catch (err) {
      // Check if the error is a 404 (not found)
      if (err.response && err.response.status === 404) {
        setError("Pokémon not found"); // Specific error message for not found
        setAbilities([]); // Clear abilities if not found
      } else {
        setError("An error occurred while fetching data"); // Generic error message for other errors
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    FetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon">Pokémon name</label>
        <input
          id="pokemon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Fetch Pokémon abilities</button>
      </form>
      {error && <p>{error}</p>}{" "}
      {/* Display error message if there is an error */}
      <ul>
        {abilities?.map((ability, index) => (
          // Use a combination of index and ability name to ensure unique keys
          <li key={`${ability.ability.name}-${index}`}>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
