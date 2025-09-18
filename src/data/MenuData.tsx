import { nanoid } from 'nanoid';

export type MenuItem = {
  id: string;
  label: string;
  href?: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: nanoid(),
    label: 'Menu',
    href: '/',
  },
  {
    id: nanoid(),
    label: 'Recommends',
    href: '/',
  },
    {
    id: nanoid(),
    label: 'Reviews',
    href: '/',
  },
  {
    id: nanoid(),
    label: 'Contact',
    href: '/',
  }
];

export default MENU_ITEMS;
