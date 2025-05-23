const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];

import { NavLink } from 'react-router-dom';
// import { links } from '../utils/constants';

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'capitalize text-primary' : 'capitalize'
              }
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
