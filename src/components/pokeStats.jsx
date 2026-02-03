const PokemonStats = ({ stats }) => {
  return (
    <ol className="stats-list">
      <li><strong>PV :</strong> {stats.HP}</li>
      <li><strong>Attaque :</strong> {stats.attack}</li>
      <li><strong>Défense :</strong> {stats.defense}</li>
      <li><strong>Attaque Spé :</strong> {stats.special_attack}</li>
      <li><strong>Vitesse :</strong> {stats.speed}</li>
    </ol>
  );
};

export default PokemonStats;