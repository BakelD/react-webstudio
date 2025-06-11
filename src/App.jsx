import BenefitsList from './components/Lists/BenefitsList/BenefitsList';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Title from './components/Title/Title';
import TeamList from './components/Lists/TeamList/TeamList';
import PortfolioList from './components/Lists/PortfolioList/PortfolioList';

import benefits from './data/benefits.json';
import teamMembers from './data/team.json';
import portfolioItems from './data/portfolio.json';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Section>
          <Container>
            <Title text="Our Benefits" hidden />
            <BenefitsList benefits={benefits} />
          </Container>
        </Section>

        <Section bColor>
          <Container>
            <Title text="Our Team" />
            <TeamList teamMembers={teamMembers} />
          </Container>
        </Section>

        <Section>
          <Container>
            <Title text="Our Portfolio" />
            <PortfolioList portfolioItems={portfolioItems} />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default App;
