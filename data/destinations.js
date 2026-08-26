export const destinations = [
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    image: '/images/kerala.jpg',
    alt: 'Kerala backwaters',
    description: 'Glide through tranquil backwaters, explore lush hills and slow down by the coast.',
    price: '₹25,000',
    category: 'india'
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    country: 'India',
    image: '/images/himachal.jpg',
    alt: 'Himachal Pradesh mountains',
    description: 'Mountain villages, cedar forests and unforgettable Himalayan road journeys.',
    price: '₹28,000',
    category: 'india'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    image: '/images/ladakh.jpg',
    alt: 'Ladakh Himalayan landscape',
    description: 'High-altitude landscapes, ancient monasteries and dramatic Himalayan passes.',
    price: '₹32,000',
    category: 'india'
  },
  {
    id: 'andaman',
    name: 'Andaman',
    country: 'India',
    image: '/images/andaman.jpg',
    alt: 'Andaman tropical beach',
    description: 'Turquoise waters, quiet islands and reef adventures wrapped in tropical calm.',
    price: '₹30,000',
    category: 'india'
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    image: '/images/goa.jpg',
    alt: 'Goa beach',
    description: 'A refined mix of golden beaches, heritage lanes, food and laid-back escapes.',
    price: '₹22,000',
    category: 'india'
  },
  {
    id: 'kenya',
    name: 'Kenya',
    country: 'Kenya',
    image: '/images/kenya.jpg',
    alt: 'Kenya safari landscape',
    description: 'Meet the wild in the Masai Mara with expert guides and immersive safari stays.',
    price: '₹1,45,000',
    category: 'international'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    image: '/images/vietnam.jpg',
    alt: 'Vietnam travel landscape',
    description: 'From lantern-lit old towns to Ha Long Bay sunsets, discover Vietnam at your pace.',
    price: '₹72,000',
    category: 'international'
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    country: 'Tanzania',
    image: '/images/tanzania.jpg',
    alt: 'Tanzania Serengeti safari',
    description: 'Wildlife-rich plains, unforgettable sunrises and the timeless rhythm of the Serengeti.',
    price: '₹1,55,000',
    category: 'international'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    image: '/images/iceland.jpg',
    alt: 'Iceland waterfall and landscape',
    description: 'Waterfalls, volcanic landscapes, glaciers and wide-open skies at the edge of Europe.',
    price: '₹1,85,000',
    category: 'international'
  },
  {
    id: 'srilanka',
    name: 'Sri Lanka',
    country: 'Sri Lanka',
    image: '/images/srilanka.jpg',
    alt: 'Sri Lanka tea plantation and landscape',
    description: 'Tea country, golden beaches, wildlife and ancient culture in one beautiful island.',
    price: '₹58,000',
    category: 'international'
  }
];

export const indiaDestinations = destinations.filter(
  (destination) => destination.category === 'india'
);

export const internationalDestinations = destinations.filter(
  (destination) => destination.category === 'international'
);