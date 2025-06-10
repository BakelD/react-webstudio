import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
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
