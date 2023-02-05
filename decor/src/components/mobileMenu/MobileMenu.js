import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useToggle } from '../customHooks/CustomHooks';
import { navigation, socialsList } from '../common/Common';
import styles from '@/styles/Header.module.scss';
import {
  Icon,
  MobileMenu,
  NavList,
  SocialsContainer,
  NavLink,
} from '../header/Header.styled';
import { Breakpoint } from 'react-socks';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useToggle(false);

  return (
    <MobileMenu>
      <Breakpoint style={{ display: 'flex', gap: '300px' }} small down>
        <Link href="/" title="Home" passHref legacyBehavior>
          <NavLink>Decor-Boutique</NavLink>
        </Link>
        <GiHamburgerMenu
          onClick={() => setMobileMenuOpen.toggle()}
        ></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
          <nav>
            <NavList>
              {navigation.map(({ id, title, path }) => (
                <li key={id}>
                  <Link href={path} className={styles.link}>
                    {title}
                  </Link>
                </li>
              ))}
            </NavList>
          </nav>
          <SocialsContainer>
            {socialsList.map(({ id, path, component }) => (
              <li key={id}>
                <Link href={path} passHref legacyBehavior>
                  <Icon target="_blank">{component}</Icon>
                </Link>
              </li>
            ))}
          </SocialsContainer>
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
