import Button from '../Button/Button';
import Container from '../Container/Container';
import Title from '../Title/Title';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
      <Container isFlex>
        <div className={css.heroWrapper}>
          <Title tag="h1" text="Effective Solutions for Your Business" />
          <Button text="Order Service" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
