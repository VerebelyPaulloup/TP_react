import { useState } from 'react';
import PokemonStats from "./pokeStats";
import "../css/pokeCard.scss"; 



const getColorHexa = (nameType) => {
  const colors = {
    "Eau": "#609FB5", "Plante": "#73B861", "Poison": "#D850C2",
    "Vol": "#738DDB", "Feu": "#E99247", "Insecte": "#70B901",
    "Électrik": "#FFD244", "Sol": "#CD793F", "Fée": "#EA7AD9",
    "Combat": "#C33039", "Psy": "#FD6960", "Acier": "#246A79",
    "Glace": "#67D1C8", "Roche": "#CBB866", "Dragon": "#1C6ABB"
  };
  return colors[nameType] || "#A8A878"; 
};

export default function PokemonCard({ poke }) {
  const [isReversed, setIsReversed] = useState(false);
  const mainType = poke.apiTypes?.[0]?.name;
  const cardColor = getColorHexa(mainType);
  const handleFlip = () => {
    setIsReversed(prev => !prev);
  };

  return (
    <article 
      className={`pokemon-card ${isReversed ? 'is-flipped' : ''}`} 
      onClick={handleFlip}
      style={{ borderColor: cardColor }}
    >
      <div className="card-inner">
        <figure className="card-front">
          <picture>
            <img src={poke.image} alt={poke.name} />
          </picture>
          <figcaption>
            <span className="types" style={{ backgroundColor: cardColor }}>
              {mainType}
            </span>
            <h2>{poke.name}</h2>
            <PokemonStats stats={poke.stats} />
          </figcaption>
        </figure>

        <div className="card-back">
          <a href="#"></a>
        </div>

      </div>
    </article>
  );
}