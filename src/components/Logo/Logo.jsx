import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ footer }) => {
  return (
    <a className={clsx(css.logo, footer && css.logoFooter)} href="./index.html">
      <span className={css.accent}>Web</span>Studio
    </a>
  );
};

export default Logo;
