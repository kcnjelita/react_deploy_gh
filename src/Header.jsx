const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.default = {
  title: "Default Title",
};

export default Header;
