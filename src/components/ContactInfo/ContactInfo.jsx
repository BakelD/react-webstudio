import css from './ContactInfo.module.css';

const ContactInfo = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, info, url }) => (
        <li key={id}>
          <a className={css.link} href={url}>
            {info}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
