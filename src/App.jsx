import React from 'react';
import Navbar from './components/Navbar.jsx';
import Accueil from './components/Accueil.jsx';
import Experiences from './components/Experiences.jsx';
import Formations from './components/Formations.jsx';
import Projets from './components/Projets.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Bienvenue sur mon portfolio !</h1>
      <Accueil />
      <Experiences />
      <Formations />
      <Projets />
    </div>
  );
}

export default App;
