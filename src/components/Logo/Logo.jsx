import css from './Logo.module.css';

const Logo = () => {
  return (
    <a className={css.logo} href="./index.html">
      <span className={css.accent}>Web</span>Studio
    </a>
  );
};

export default Logo;
