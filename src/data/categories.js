// Product categories mirror the three real catalog sections.
// `image` is a representative product photo used on the home category cards.
export const categories = [
  {
    id: 'equipment',
    key: 'equipment',
    icon: 'Activity',
    tone: 'primary',
    image: '/products/1712000196.png',
  },
  {
    id: 'furniture',
    key: 'furniture',
    icon: 'BedDouble',
    tone: 'teal',
    image: '/products/1712023125.png',
  },
  {
    id: 'supplies',
    key: 'supplies',
    icon: 'Syringe',
    tone: 'primary',
    image: '/products/1712198593.png',
  },
];

// Filter tabs used on the Products catalog page and home Featured section.
export const productFilters = [
  { id: 'all', key: 'all' },
  { id: 'equipment', key: 'equipment' },
  { id: 'furniture', key: 'furniture' },
  { id: 'supplies', key: 'supplies' },
];
