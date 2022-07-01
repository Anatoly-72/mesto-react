import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header header_margin">
      <img className="logo" src={logo} alt="Логотип" />
    </header>
  );
}

export default Header;
