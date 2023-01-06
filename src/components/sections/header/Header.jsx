import Logo from '../../logo/Logo';
import Navbar from '../../navbar/Navbar';

import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar className="navigation" />
    </header>
  );
};

export default Header;
