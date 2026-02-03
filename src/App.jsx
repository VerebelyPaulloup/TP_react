import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import pokemon_logo from "./assets/pokeLogo.png";
import Footer from "./Footer/Footer.jsx"

function App() {

  return (
    <>
      <h1>
        <Link to={"/"}>
            <img
            alt="pokemon_logo"
            src={pokemon_logo}
            className="pokemon_logo"
            />
        </Link>
      </h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;