import clsx from 'clsx';
import css from './Section.module.css';

const Section = ({ bColor = false, children }) => {
  console.log(bColor);
  return <section className={clsx(css.section, bColor && css.bColor)}>{children}</section>;
};

export default Section;
