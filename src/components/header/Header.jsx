import { useState, useEffect } from 'react';

import './header.css';
import { Logo, Navbar } from '../../utils/componentsLinks';
import { MenuIcon } from '../../utils/iconsLinks';

const Header = () => {
  const [navBarHidden, setnavBarHidden] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1000) setnavBarHidden(false);
  }, []);

  const onHideNavBar = () => {
    setnavBarHidden((lastVal) => !lastVal);
  };

  return (
    <header className="header">
      <Logo />
      <Navbar navBarHidden={navBarHidden} />
      <MenuIcon className="menu-icon" onClick={onHideNavBar} />
    </header>
  );
};

export default Header;
