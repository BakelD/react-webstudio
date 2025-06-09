import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import NavMenu from './components/NavMenu/NavMenu';
import Section from './components/Section/Section';

import menuItems from './data/menu.json';
import contacts from './data/contacts.json';
import ContactInfo from './components/ContactInfo/ContactInfo';

const App = () => {
  return (
    <>
      <Header>
        <Container isFlex>
          <Logo />
          <NavMenu menuItems={menuItems} />
          <ContactInfo contacts={contacts} />
        </Container>
      </Header>

      <main>
        <Section>
          <Container>Some section</Container>
        </Section>
        <Section>
          <Container>Some section</Container>
        </Section>
        <Section>
          <Container>Some section</Container>
        </Section>
        <Section>
          <Container>Some section</Container>
        </Section>
      </main>

      <Footer>
        {' '}
        <Container>Footer</Container>
      </Footer>
    </>
  );
};

export default App;
