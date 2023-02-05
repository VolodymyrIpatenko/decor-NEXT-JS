import { Description, Main } from '../home/Home.styled';
import { RentalList } from './Rental.styled';
import Typed from 'react-typed';
import Image from 'next/image';
import styles from '@/styles/Rental.module.scss';
import rentalData from './rentalData.js';

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Rental = () => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Rental Collection']}
          typeSpeed={100}
          showCursor={false}
        />
        <Description>
          Renting with us is easy! Contact us to see if your preferred backdrop
          is available for your
          <br />
          desired date. Once we confirm availability, we can reserve the
          backdrop for you.
          <br /> Rentals are for up to 4 days.
          <br /> We sign a rental agreement on the day of pick up.
          <br /> A damage deposit is required for all rentals.
          <br /> Contact us if you have any questions!
        </Description>
        <RentalList>
          {rentalData.map(({ photo, id, alt, title, description }) => {
            return (
              <li key={id} className={styles.rental__item}>
                <a className={styles.rental__link}>
                  <div class={styles.rental__overlay}>
                    <Image
                      className={styles.rental__img}
                      width="300"
                      height="300"
                      src={photo}
                      alt={alt}
                      placeholder="blur"
                    />
                    <div className={styles.rental__animation}>
                      <p className={styles.rental__text}>{description}</p>
                    </div>
                  </div>
                  <div className={styles.rental__card}>
                    <h2 className={styles.rental__heading}>{title}</h2>
                    <p className={styles.rental__description}>{description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </RentalList>
      </Main>
    </>
  );
};

export default Rental;
