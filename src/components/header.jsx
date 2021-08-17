import React from 'react';

const Header = () => (
  <nav className="navbar">
    <button type="button">X</button>
    <ul className="menuNav showMenu">
      <li><a href="/react-todo-project/">Home</a></li>
      <li><a href="/react-todo-project/about">About</a></li>
    </ul>
  </nav>
);

export default Header;
