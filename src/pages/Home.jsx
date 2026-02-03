import { useState, useEffect } from 'react';
import '../css/normalize.css';
import '../css/style.css';
import logo from '../assets/pokeLogo.png';
import PokemonCard from "../components/pokeCard";
import Sidebar from '../components/sidebar';

function Home() {
  const [dataPokemon, setDataPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => response.json())
      .then((data) => {
        setDataPokemon(data); 
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []); 

  return (
    <>
      {/* <h1>
        <img src={logo} alt="PokeLogo" style={{ width: '200px' }} />
      </h1> */}
      <main className="lmj-layout-inner">
        <Sidebar />
        <div className="pokemon-list">
          {dataPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} poke={pokemon} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;