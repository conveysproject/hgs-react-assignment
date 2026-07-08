import defaultFeature from '../assets/codia-studio-8qz36s.jpg';

const defaultMenu = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#service',
    megaMenu: {
      featuredImage: defaultFeature,
      columns: [
        {
          title: 'Title1',
          links: [
            { label: 'Lorem ipsum', href: '/' },
            { label: 'Dolor sit', href: '/' },
            { label: 'perspiciatis unde', href: '/' },
            { label: 'et quasi architecto', href: '/' },
          ],
        },
        {
          title: 'Title2',
          links: [
            { label: 'Lorem ipsum', href: '/' },
            { label: 'Dolor sit', href: '/' },
            { label: 'perspiciatis unde', href: '/' },
            { label: 'et quasi architecto', href: '/' },
          ],
        },
        {
          title: 'Title3',
          links: [
            { label: 'Lorem ipsum', href: '/' },
            { label: 'Dolor sit', href: '/' },
            { label: 'perspiciatis unde', href: '/' },
            { label: 'et quasi architecto', href: '/' },
          ],
        },
      ],
    },
  },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Investors', href: '#investors' },
  { label: 'Insights', href: '#insights' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default defaultMenu;
