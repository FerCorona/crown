import React from 'react';

const NavBar = ({ options, activeTab, onClick }) => (
  <div className='CROWNNavBar'>
    {
      options.map((option, index) => (
        <div
          className={`Item ${option.key === activeTab && 'Active Colorful'}`}
          key={`option-${index}`}
          onClick={() => onClick(option.key)}>
          {option.title}
        </div>
      ))
    }
  </div>
);

NavBar.defaultProps = {
  options: [
    {
      key: 'inicio',
      title: 'Inicio'
    },
    {
      key: 'cuenta',
      title: 'Mi Cuenta'
    },
    {
      key: 'carrito',
      title: 'Carrito'
    }
  ],
  activeTab: 'inicio',
  onClick: () => {}
};

export default NavBar;