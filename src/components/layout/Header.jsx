import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="px-6 py-5 fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;