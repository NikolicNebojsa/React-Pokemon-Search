import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonData from "./components/PokemonData";

import React from "react";

const App = () => {
  // kreiramo state koji ce sadrzati naziv pokemona iz input fielda
  const [pokemon, setPokemon] = useState("");
  // kreiramo state koji ce sluziti kao prop za pokemondata, a uzimace info
  const [pokemonData, setPokemonData] = useState(null);
  // funkcija koja uzima jedan argument i koristi setPokemon da promeni vrednost pokemonu. Ovu funkciju passujemo kao prop SearchBaru kako bi SearchBar mogao da ucita svoju trenutnu vrednost i updatuje pokemon state
  const handlePokemon = (value) => {
    // menja pokemon state u value( vrednost ucitana u SearchBaru)
    setPokemon(value);
  };

  // asinhrona funkcija koja ce pozvati API sa inputom vracenim iz SearchBar
  async function searchPokemon() {
    // API URL izmenjen imenom pokemona koji se pretrazuje
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("No pokemon found");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (pokemon) {
      searchPokemon();
    }
  }, [pokemon]);

  return (
    <div>
      <SearchBar search={handlePokemon} />
      {pokemonData && <PokemonData pokemonData={pokemonData} />}
    </div>
  );
};

export default App;
