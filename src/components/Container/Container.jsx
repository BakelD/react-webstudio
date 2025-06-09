import clsx from 'clsx';
import css from './Container.module.css';

const Container = ({ isFlex = false, children }) => {
  return <div className={clsx(css.container, isFlex && css.flex)}>{children}</div>;
};

export default Container;
