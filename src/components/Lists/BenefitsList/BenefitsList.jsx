import css from './BenefitsList.module.css';

const BenefitsList = ({ benefits }) => {
  return (
    <ul className={css.list}>
      {benefits.map(({ id, title, info }) => (
        <li key={id}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.text}>{info}</p>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
