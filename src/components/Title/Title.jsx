import clsx from 'clsx';
import css from './Title.module.css';

const Title = ({ tag = 'h2', text, hidden = false }) => {
  const Tag = tag;

  return <Tag className={clsx(tag === 'h2' ? css.title : css.mainTitle, hidden && css.visuallyHidden)}>{text}</Tag>;
};

export default Title;
