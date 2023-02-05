import { Footer, MailLink } from './Footer.styled';
import Link from 'next/link';
import { NavLink } from '../header/Header.styled';

const PageFooter = () => {
  return (
    <Footer>
      <Link title="Home" href="/" passHref legacyBehavior>
        <NavLink>Decor-Boutique</NavLink>
      </Link>
      <MailLink href="decorboutiquerental@gmail.com">
        decorboutiquerental@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
