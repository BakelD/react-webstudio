import clsx from 'clsx';
import css from './NavMenu.module.css';

const NavMenu = ({ menuItems }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {menuItems.map(({ id, item, url, current }) => (
          <li key={id}>
            <a className={clsx(css.link, current && css.current)} href={url}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
