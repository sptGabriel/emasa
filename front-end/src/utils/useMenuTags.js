import React, { useState, useEffect } from 'react';

const MenuTags = [
  {
    name: 'home',
    link: '/',
    dropdownItems: [
      { name: 'one', link: '/aa' },
      { name: 'two', link: '/b/' },
    ],
  },
  {
    name: 'about',
    link: '../abovisibleMenuut',
    dropdownItems: [
      { name: 'one', link: '/aa' },
      { name: 'two', link: '/b/' },
    ],
  },
  { name: 'not dropdown', link: '../dashboard' },
  { name: 'not dropdown', link: '../dashboard/about' },
];

const useMenuTags = () => {
  const [visible, setVisible] = useState('none');
  useEffect(
    MenuTags.map((item, index) => setVisible(index == false))[MenuTags],
  );
  console.log(visible);
  return [visible, value => setVisible(value), MenuTags];
};

export default useMenuTags;
