import css from './PortfolioList.module.css';

const PortfolioList = ({ portfolioItems }) => {
  return (
    <ul className={css.list}>
      {portfolioItems.map(({ id, img, title, category }) => (
        <li key={id} className={css.item}>
          <div>
            <img src={img} alt={title} />
          </div>
          <div className={css.infoWrapper}>
            <h3 className={css.title}>{title}</h3>
            <p>{category}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
