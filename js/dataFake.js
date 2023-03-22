// ============================================ CARD ITEMS START ============================================
const portfolio_list = [
  {
    id: 1,
    image : '../assets/portfolio1.png',
    title : 'Green & Tasty Lemon',
    category : 'Fruits'
  },
  {
    id: 2,
    image : '../assets/portfolio2.png',
    title : 'Organic Carrot',
    category : 'Farmer'
  },
  {
    id: 3,
    image : '../assets/portfolio3.png',
    title : 'Organic Betel Leaf',
    category : 'Leaf'
  },
  {
    id: 4,
    image : '../assets/portfolio4.png',
    title : 'Natural Tommato',
    category : 'Fruits'
  },
  {
    id: 5,
    image : '../assets/portfolio5.png',
    title : 'Black Raspberry',
    category : 'Farmer'
  },
  {
    id: 6,
    image : '../assets/portfolio6.png',
    title : 'Honey Orange',
    category : 'Farmer'
  },
  
]
const card_list = [
    {
      id: 1,
      category: "Vegetable",
      image: "../assets/calabrese.png",
      title: "Calabrese Broccoli",
      price: "$20.00",
      sale: "$13.00",
      star: 5,
    },
    {
      id: 2,
      category: "Fresh",
      image: "../assets/banana.png",
      title: "Fresh Banana Fruites",
      price: "$20.00",
      sale: "$14.00",
      star: 5,
    },
    {
      id: 3,
      category: "Millets",
      image: "../assets/white-nuts.png",
      title: "White Nuts",
      price: "$20.00",
      sale: "$15.00",
      star: 5,
    },
    {
      id: 4,
      category: "Vegetable",
      image: "../assets/vegan.png",
      title: "Vegan Red Tomato",
      price: "$20.00",
      sale: "$17.00",
      star: 5,
    },
    {
      id: 5,
      category: "Health",
      image: "../assets/mung-bean.png",
      title: "Mung Bean",
      price: "$20.00",
      sale: "$11.00",
      star: 5,
    },
    {
      id: 6,
      category: "Nuts",
      image: "../assets/hazelnut.png",
      title: "Brown Hazelnut",
      price: "$20.00",
      sale: "$12.00",
      star: 5,
    },
    {
      id: 7,
      category: "Fresh",
      image: "../assets/eggs.png",
      title: "Eggs",
      price: "$20.00",
      sale: "$17.00",
      star: 5,
    },
    {
      id: 8,
      category: "Fresh",
      image: "../assets/zelco.png",
      title: "Zelco Suji Elaichi Rusk",
      price: "$20.00",
      sale: "$15.00",
      star: 5,
    },
    {
      id: 9,
      category: "Health",
      image: "../assets/mung.png",
      title: "Mung Bean",
      price: "$20.00",
      sale: "$11.00",
      star: 5,
    },
    {
      id: 10,
      category: "Nuts",
      image: "../assets/white-nuts.png",
      title: "White Hazelnut",
      price: "$20.00",
      sale: "$12.00",
      star: 5,
    },
    {
      id: 11,
      category: "Fresh",
      image: "../assets/corn.png",
      title: "Fresh Corn",
      price: "$20.00",
      sale: "$17.00",
      star: 5,
    },
    {
      id: 12,
      category: "Fresh",
      image: "../assets/almonds.png",
      title: "Organic Almonds",
      price: "$20.00",
      sale: "$15.00",
      star: 5,
    },
    {
      id: 13,
      category: "Vegetable",
      image: "../assets/mung-bean2.png",
      title: "Mung Bean",
      price: "$20.00",
      sale: "$11.00",
      star: 5,
    },
    {
      id: 14,
      category: "Vegetable",
      image: "../assets/brown-hazelnut.png",
      title: "Brown Hazelnut",
      price: "$20.00",
      sale: "$12.00",
      star: 5,
    },
    {
      id: 15,
      category: "Vegetable",
      image: "../assets/onion.png",
      title: "Onion",
      price: "$20.00",
      sale: "$17.00",
      star: 5,
    },
    {
      id: 16,
      category: "Vegetable",
      image: "../assets/cabbage.png",
      title: "Cabbage",
      price: "$20.00",
      sale: "$15.00",
      star: 5,
    },
];

const team = [
  {
    id: 1,
    image: '../assets/team1.png',
    name: 'Giovani Bacardo',
    profession: 'Farmer',
    social: {
      insta: '',
      fb: 'abc',
      tw: 'abc'
    }
  },
  {
    id: 2,
    image: '../assets/team2.png',
    name: 'Marianne Loreno',
    profession: 'Designer',
    social: {
      insta: 'abc',
      fb: 'abc',
      tw: 'abc'
    }
  },
  {
    id: 3,
    image: '../assets/team3.png',
    name: 'Riga Pelore',
    profession: 'Farmer',
    social: {
      insta: 'abc',
      fb: 'abc',
      tw: 'abc'
    }
  },
  {
    id: 4,
    image: '../assets/team4.png',
    name: 'Keira Knightley',
    profession: 'Farmer',
    social: {
      insta: '',
      fb: 'abc',
      tw: 'abc'
    }
  },
  {
    id: 5,
    image: '../assets/team5.png',
    name: 'Scott Lawrence',
    profession: 'Designer',
    social: {
      insta: 'abc',
      fb: 'abc',
      tw: 'abc'
    }
  },
  {
    id: 6,
    image: '../assets/team6.png',
    name: 'Karen Allen',
    profession: 'Farmer',
    social: {
      insta: 'abc',
      fb: 'abc',
      tw: 'abc'
    }
  },
]
const blog = [
  {
    id: 1,
    image: '../assets/blog1.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'The Benefits of Vitamin D & How to Get It',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    id: 2,
    image: '../assets/blog2.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'Our Favorite Summertime Tomato',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    id: 1,
    image: '../assets/blog3.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'Benefits of Vitamin C & How to Get It',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    id: 2,
    image: '../assets/blog4.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'Research More Organic Foods',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    id: 1,
    image: '../assets/blog5.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'Everyday Fresh Fruites',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    id: 2,
    image: '../assets/blog6.png',
    date: '25-Nov',
    admin: 'Rachi Card',
    title: 'Don’t Use Plastic Product! it’s Kill Nature',
    content: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
]
   
export {card_list,portfolio_list,team,blog}