import { Main, Description, Title } from './Home.styled';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import HomeImg from './main.jpg';

const Home = () => {
  return (
    <>
      <Main>
        <Title>
          WEDDING RENTALS AND MUCH
          <br /> MORE!
        </Title>
        <Description>
          Decor Boutique is a small family business, specialized in providing
          rental backdrops
          <br /> as well as fresh and dried floral items. We love to participate
          in local markets and meeting new people.
          <br /> Seeing happy customers is especially rewarding. Browse the
          other pages on our website to check out our rental collection and see
          what we are up to.
        </Description>
        <Image className={styles.img} src={HomeImg} alt="Wedding cheremony" />
      </Main>
    </>
  );
};

export default Home;
