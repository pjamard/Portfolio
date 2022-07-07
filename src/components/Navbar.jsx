import React from 'react';

function Navbar() {
  return (
    <div className='navbarDiv'>
      <ul>
        <li>
          <a href='#accueil'>Accueil</a>
        </li>
        <li>
          <a href='#experiences'>Expériences</a>
        </li>
        <li>
          <a href='#formations'>Formation</a>
        </li>
        <li>
          <a href='#projets'>Projets</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
