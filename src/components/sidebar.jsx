import '../css/Sidebar.scss';
import { useState } from 'react';
import pokeball from '../assets/pokeball.png'; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);


  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
        
      </button>
      <h2>
        <img src={pokeball} alt="pokeball" />
        <p>Pokédex</p>
      </h2>
      <div>Votre Pokédex est vide</div>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
        <img src={pokeball} alt="pokeball" />
        <p>Ouvrir le Pokédex</p>
      </button>
    </div>
  );
}

export default Sidebar;
