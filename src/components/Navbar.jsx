import React from 'react';

const Navbar = ({darkmode, setDarkmode}) => {
  return (
    <nav>
      <button onClick={()=>setDarkmode(!darkmode)} >
        darkmode
      </button>
      <ul className={`navbar ${darkmode?"dark":"light"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
