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
        <div className="pokemon-img element">
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
        <div>
          <div className="ability-info element">
            <h3>Abilities</h3>
            <ul>
              {pokemonData.abilities.map((item, index) => (
                <li key={index}>
                  {item.ability.name.replace(/[^a-zA-Z0-9 ]/g, " ")}
                </li>
              ))}
            </ul>
          </div>
          <div className="held-items-info element">
            <h3>Held Items</h3>
            <ul>
              {pokemonData.held_items.length == 0 ? (
                <span>No held items</span>
              ) : (
                pokemonData.held_items.map((item, index) => (
                  <li key={index}>
                    {item.item.name.replace(/[^a-zA-Z0-9 ]/g, " ")}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="type-info element">
            <h3>Type</h3>
            <div className="pokemon-types">
              {pokemonData.types.map((item, index) => (
                <span className={`${item.type.name} type-button`} key={index}>
                  {item.type.name}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="stats-info element">
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
