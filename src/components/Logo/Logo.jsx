import css from './Logo.module.css';

const Logo = () => {
  return (
    <a className={css.logo}>
      <span className={css.accent}>Web</span>Studio
    </a>
  );
};

export default Logo;
