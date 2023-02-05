import Link from 'next/link';
import { navigation, socialsList } from '../common/common.js';
import styles from '@/styles/Header.module.scss';
import MobileMenuComponent from '../mobileMenu/MobileMenu.js';

import {
  Header,
  SocialsContainer,
  NavList,
  Wrap,
  Icon,
  NavLink,
} from './Header.styled.js';

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Wrap>
          <Link href="/" title="На головну" hrefProps legacyBehavior>
            <NavLink>Decor-Boutique</NavLink>
          </Link>
          <nav>
            <NavList>
              {navigation.map(({ id, title, path }) => (
                <li key={id}>
                  <Link href={path} className={styles.link}>
                    <NavLink>{title}</NavLink>
                  </Link>
                </li>
              ))}
            </NavList>
          </nav>
        </Wrap>
        <SocialsContainer>
          {socialsList.map(({ id, path, component }) => (
            <li key={id}>
              <Link href={path} passHref legacyBehavior>
                <Icon target="_blank">{component}</Icon>
              </Link>
            </li>
          ))}
        </SocialsContainer>
      </Header>
      <MobileMenuComponent />
    </>
  );
};

export default HeaderComponent;
