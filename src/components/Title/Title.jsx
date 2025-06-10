import css from './Title.module.css';

const Title = ({ tag = 'h2', text }) => {
  const Tag = tag;

  return <Tag className={tag === 'h2' ? css.title : css.mainTitle}>{text}</Tag>;
};

export default Title;
