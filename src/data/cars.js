// Ford showcase cards (used on Home and Ford pages)
export const fordCars = [
  {
    id: 'territory-x',
    title: 'Territory X',
    image: '/Image/TerritoryX-Ruby-Red.jpg',
    badge: 'New',
    text: 'The Territory X in Ruby Red — bold styling with a comfortable, tech-rich cabin.',
  },
  {
    id: 'everest-titanium',
    title: 'Everest Titanium',
    image: '/Image/EverestTitanium-Absolute-Black.png',
    text: 'Everest Titanium in Absolute Black — premium 7-seat SUV built for any road.',
  },
  {
    id: 'everest-sport',
    title: 'Everest Sport',
    image: '/Image/Everest-Sport-Menu.png',
    text: 'Everest Sport — sporty black-accent styling with capable all-terrain ability.',
  },
  {
    id: 'wildtrak',
    title: 'Ranger Wildtrak',
    image: '/Image/Wildtrak.png',
    text: 'Ranger Wildtrak — the adventure-ready pickup with rugged good looks.',
  },
  {
    id: 'ranger-raptor',
    title: 'Ranger Raptor 3.0L',
    image: '/Image/RangerRaptor30L.jpg',
    badge: 'Performance',
    text: 'Ranger Raptor 3.0L V6 — the ultimate performance off-road pickup.',
  },
]

// GTR / supercar rental catalogue
export const rentalCars = [
  { id: 1, name: 'Toyota New Yaris', price: 42, image: '/Image/GTR35.png', gearbox: 'Manual', seats: '5 Seats', mpg: '24 MPG' },
  { id: 2, name: 'Pajero Sport', price: 46, image: '/Image/GTR35.png', gearbox: 'Manual', seats: '5 Seats', mpg: '34 MPG' },
  { id: 3, name: 'Honda Civic', price: 52, image: '/Image/GTR35.png', gearbox: 'Auto', seats: '5 Seats', mpg: '28 MPG' },
  { id: 4, name: 'Mazda CX-3', price: 54, image: '/Image/GTR35.png', gearbox: 'Auto', seats: '5 Seats', mpg: '24 MPG' },
  { id: 5, name: 'BMW X5', price: 56, image: '/Image/GTR35.png', gearbox: 'Manual', seats: '6 Seats', mpg: '29 MPG' },
  { id: 6, name: 'Nissan GT-R', price: 120, image: '/Image/GTR35.png', gearbox: 'Auto', seats: '4 Seats', mpg: '18 MPG' },
  { id: 7, name: 'Audi R8', price: 140, image: '/Image/GTR35.png', gearbox: 'Auto', seats: '2 Seats', mpg: '17 MPG' },
  { id: 8, name: 'Porsche 911', price: 160, image: '/Image/GTR35.png', gearbox: 'Auto', seats: '4 Seats', mpg: '20 MPG' },
]

// Curated supercar showcase (distinct from the GTR rental catalogue)
export const superCars = [
  {
    id: 'gtr-r35',
    title: 'Nissan GT-R R35',
    image: '/Image/GTR35.png',
    badge: 'Icon',
    text: 'Twin-turbo V6, all-wheel drive and 0–100 in under 3 seconds. The everyday hypercar.',
    specs: { power: '565 hp', topSpeed: '315 km/h', zeroTo100: '2.9 s' },
  },
  {
    id: 'r8',
    title: 'Audi R8 V10',
    image: '/Image/GTR35.png',
    badge: 'Flagship',
    text: 'A naturally aspirated V10 wrapped in a sculpted aluminium body — pure driver focus.',
    specs: { power: '602 hp', topSpeed: '331 km/h', zeroTo100: '3.1 s' },
  },
  {
    id: '911',
    title: 'Porsche 911 Turbo',
    image: '/Image/GTR35.png',
    badge: 'Legend',
    text: 'The benchmark sports car. Effortless speed, daily usability and timeless lines.',
    specs: { power: '580 hp', topSpeed: '330 km/h', zeroTo100: '2.7 s' },
  },
]

// Top navigation links — each routes to its own distinct page
export const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'GTR', to: '/gtr' },
  { name: 'Supercars', to: '/supercars' },
  { name: 'Ford', to: '/ford' },
  { name: 'Pickup', to: '/pickup' },
]

// "All Categorys" dropdown items
export const categories = ['Action', 'Another action', 'Hello Ah bek']
