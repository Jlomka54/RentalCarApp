import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <div>
      <div>
        <NavLink className={buildCssClasses} to="/">
          Home
        </NavLink>
        <NavLink className={buildCssClasses} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
