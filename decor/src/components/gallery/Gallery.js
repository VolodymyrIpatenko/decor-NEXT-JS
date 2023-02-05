import { Title, Main } from '../home/Home.styled';
import GalleryList from './Gallery.styled';
import Typed from 'react-typed';
import Image from 'next/image';

import galleryData from './galleryData';

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Gallery = () => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Gallery']}
          typeSpeed={100}
          showCursor={false}
        />
        <GalleryList>
          {galleryData.map(({ id, photo }) => {
            return (
              <li>
                <Image key={id} src={photo} alt="photo gallery" width="400" />
              </li>
            );
          })}
        </GalleryList>
      </Main>
    </>
  );
};

export default Gallery;
