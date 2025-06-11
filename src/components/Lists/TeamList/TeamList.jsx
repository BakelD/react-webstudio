import css from './TeamList.module.css';

const TeamList = ({ teamMembers }) => {
  console.log(teamMembers);
  return (
    <ul className={css.list}>
      {teamMembers.map(({ id, img, fullName, position }) => (
        <li key={id} className={css.item}>
          <div>
            <img src={img} alt={fullName} />
          </div>
          <div className={css.infoWrapper}>
            <h3 className={css.title}>{fullName}</h3>
            <p className={css.position}>{position}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
