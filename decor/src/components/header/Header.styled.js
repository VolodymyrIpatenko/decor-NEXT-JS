import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  top: 0;
  padding: 30px;
  background: #ccd0c3;
  @media (max-width: 768px) {
    display: block;
    height: 200px;
  }
`;

export const NavLink = styled.a`
  padding: 1px 4px;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 30px;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  &:is(:hover, :active) {
    color: #2196f3;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Icon = styled.a`
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  color: white;
  &:hover {
    color: #2196f3;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 30px;
  right: 10px;
`;

export const SocialsContainer = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1199px) {
    display: flex;
    margin-left: 90px;
  }
`;

export const NavList = styled.ul`
  display: grid;
  gap: 5px;

  @media screen and (min-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const MobileWrap = styled.div`
  @media screen and (max-width: 1199px) {
    display: flex;
    gap: 300px;
  }
  display: none;
`;
