import { SlSocialInstagram } from 'react-icons/sl';

export const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Gallery', path: '/gallery' },
  { id: 3, title: 'Rental Collection', path: '/rental-collection' },
  { id: 4, title: 'Contacts', path: '/contacts' },
];

export const socialsList = [
  {
    id: 1,
    path: 'https://www.instagram.com/decorboutiquerental/',
    component: <SlSocialInstagram />,
  },
];
