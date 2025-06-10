import ContactInfo from '../ContactInfo/ContactInfo';
import Container from '../Container/Container';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../Logo/Logo';

import menuItems from '../../data/menu.json';
import contacts from '../../data/contacts.json';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container isFlex>
        <Logo />
        <NavMenu menuItems={menuItems} />
        <ContactInfo contacts={contacts} />
      </Container>
    </header>
  );
};

export default Header;
