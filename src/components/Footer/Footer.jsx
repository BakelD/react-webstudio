import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerInfo}>
          <Logo footer />
          <p className={css.info}>
            Increase the flow of customers and sales for your business with digital marketing & growth solutions.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
