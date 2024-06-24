import React from "react";
import "./PokemonData.css";

const PokemonData = ({ pokemonData }) => {
  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="pokemon-info">
        <div className="pokemon-name">
          <h2>{pokemonData.name}</h2>
        </div>
        <div className="pokemon-img">
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
        <div className="ability-info">
          <h3>Abilities</h3>
          <ul>
            {pokemonData.abilities.map((item, index) => (
              <li key={index}>
                {item.ability.name.replace(/[^a-zA-Z0-9 ]/g, " ")}
              </li>
            ))}
          </ul>
        </div>
        <div className="held-items-info">
          <h3>Held Items</h3>
          <ul>
            {pokemonData.held_items.map((item, index) => (
              <li key={index}>
                {item.item.name.replace(/[^a-zA-Z0-9 ]/g, " ")}
              </li>
            ))}
          </ul>
        </div>
        <div className="type-info">
          <h3>Type</h3>
          {pokemonData.types.map((item, index) => (
            <span className={`${item.type.name}`} key={index}>
              {item.type.name}
              <br />
            </span>
          ))}
        </div>
        <div className="stats-info">
          <h3>Stats</h3>
          <ul>
            {pokemonData.stats.map((item, index) => (
              <div key={index}>
                {" "}
                <li>
                  {item.stat.name.replace(/[^a-zA-Z0-9 ]/g, " ")}:{" "}
                  {item.base_stat}
                </li>
                <meter value={item.base_stat} min={0} max={255}></meter>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PokemonData;
