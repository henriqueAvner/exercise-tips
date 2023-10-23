import { NavLink } from 'react-router-dom';
import './styles/NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Realizar outro login</NavLink>
      <NavLink to="/about">Sobre o projeto</NavLink>
      <NavLink to="/author">Autor do Projeto</NavLink>
    </nav>
  );
}

export default NavBar;
