import css from './ContactInfo.module.css';

const ContactInfo = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(item => (
        <li>
          <a className={css.link} href="">
            {item.info}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
