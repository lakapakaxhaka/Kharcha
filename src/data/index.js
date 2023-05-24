export const category = [
  {
    id: 1,
    name: "T-Shirts",
  },
  {
    id: 2,
    name: "Hoodies",
  },
  {
    id: 3,
    name: "Jacket",
  },
  {
    id: 4,
    name: "Shoes",
  },
];

export const products = [
  {
    id: 1,
    title: "Polo Shirt",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "$150",
    category: 1,
    rating: 5,
  },
  {
    id: 2,
    title: "705 Black",
    img: "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$80",
    category: 1,
    rating: 2,
  },
  {
    id: 3,
    title: "Black Hoodie",
    img: "https://media.istockphoto.com/id/1142211733/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=inMPwtP-ebqhXD9_A3bHETPkyC37x0rFNSLYgf6rLMM=",
    price: "$290",
    category: 2,
    rating: 3,
  },
  {
    id: 4,
    title: "Nike Green",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$320",
    category: 4,
    rating: 7,
  },
  {
    id: 5,
    title: "Pack of Six",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "$170",
    category: 1,
    rating: 5,
  },
  {
    id: 6,
    title: "Solid Blue",
    img: "https://media.istockphoto.com/id/1319572197/photo/mens-hooded-jacket-for-your-design-mockup-for-print.jpg?s=612x612&w=0&k=20&c=c3n5O6D_gKpiX7zrN-K2wvDBYNuf9VMwUUysBg3TjkU=",
    price: "$210",
    category: 2,
    rating: 4,
  },
  {
    id: 7,
    title: "Dark Green",
    img: "https://media.istockphoto.com/id/1142211901/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-MrAs2qu2QXsZyHR5loq7ZzX_pl-uy7JfK6KKqWEs6o=",
    price: "$240",
    category: 2,
    rating: 8,
  },
  {
    id: 8,
    title: "Solid White",
    img: "https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$210",
    category: 1,
    rating: 6,
  },
  {
    id: 9,
    title: "Maroon Wedges",
    img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: "$410",
    category: 4,
    rating: 10,
  },
  {
    id: 10,
    title: "White Jogers",
    img: "https://media.istockphoto.com/id/695474472/photo/overhead-shot-of-white-sneakers-on-pink-background.jpg?s=612x612&w=0&k=20&c=GzsXYIfYMrZ2ZHXvM_rImCnBJkjZhgTJOxdMPLOJ22s=",
    price: "$190",
    category: 4,
    rating: 7,
  },
  {
    id: 11,
    title: "High Heels",
    img: "https://media.istockphoto.com/id/627372978/photo/high-heels-view-from-above.jpg?s=612x612&w=0&k=20&c=2bgND2FvVyHmpdnocK97vN52P7uwT14F6-WNRV1WKKc=",
    price: "$480",
    category: 4,
    rating: 8,
  },
  {
    id: 12,
    title: "Gray Style",
    img: "https://media.istockphoto.com/id/514571758/photo/photo-of-gray-hoody-holding-on-wood-background-vertical-blank.jpg?s=612x612&w=0&k=20&c=eglfsRaTE1qdNrdoqtS_r2Hq-htL5ZqcUCGfsNc8NhU=",
    price: "$230",
    category: 2,
    rating: 7,
  },
];

export const sortProductDescByRating = (numberOfProducts = 8) => {
  const prods = products.sort((a, b) => b.rating - a.rating);
  return prods.slice(0, numberOfProducts);
};

const appendCategoryNames = (bestSeller) => {
  return bestSeller.map((item) => {
    const cat = category.find((cat) => cat.id === item.category);
    return { ...item, category: cat.name };
  });
};

export const getBestSeller = () => {
  const bestSeller = sortProductDescByRating();
  return appendCategoryNames(bestSeller);
};

export const getBestSellerByCategoryId = (id) => {
  const bestSeller = sortProductDescByRating();
  const prods = bestSeller.filter((item) => item.category === id);
  return appendCategoryNames(prods);
};

// {
//   id: 1,
//   title: 'Apple iPhone 12',
//   img: 'https://images.unsplash.com/photo-1603581912159-059e2fc8b853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 799.99,
//   category: 'Electronics',
//   rating: 4.5
// },
// {
//   id: 2,
//   title: 'Nike Air Force 1',
//   img: 'https://images.unsplash.com/photo-1597130216899-80decf88c7a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmikeSBhaXIlMjBmb3JjZSUyMDElMjBjYXBzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 129.99,
//   category: 'Fashion',
//   rating: 4.8
// },
// {
//   id: 3,
//   title: 'Samsung Galaxy S21 Ultra',
//   img: 'https://images.unsplash.com/photo-1611972708997-bae74873845f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 1199.99,
//   category: 'Electronics',
//   rating: 4.9
// },
// {
//   id: 4,
//   title: 'Bose QuietComfort 35 II',
//   img: 'https://images.unsplash.com/photo-1548106416-2159a45c4262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9zZSUyMHF1aXRjb21lJTIwMzUlMjBpZSUyMHByaWNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 299.99,
//   category: 'Electronics',
//   rating: 4.7
// },
// {
//   id: 5,
//   title: 'Lululemon Wunder Under High-Rise Tights',
//   img: 'https://images.unsplash.com/photo-1608523818342-cc924ab50eb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVsdWxlbW9uJTIwdGVhcnN8ZW58MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 98.99,
//   category: 'Fashion',
//   rating: 4.8
// },
// {
//   id: 6,
//   title: 'Nintendo Switch Lite',
//   img: 'https://images.unsplash.com/photo-1608744104701-7c3a3a8c7d2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmludGVuZG8lMjBzd2l0Y2glMjBsaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 199.99,
//   category: 'Electronics',
//   rating: 4.6
// },
// {
//   id: 7,
//   title: 'Apple MacBook Pro 16-inch',
//   img: 'https://images.unsplash.com/photo-1593642634405-858b0017b8f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3MlMjBwcm8lMjAxNi1pbmNoJTIwbG9nbyUyMGZyb21zfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 2399.99,
//   category: 'Electronics',
//   rating: 4.9
// },
// {
//   id: 8,
//   title: 'Peloton Bike+',
//   img: 'https://images.unsplash.com/photo-1617017318222-4cbbf1e9d95c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlbG90b24lMjBiaWtlJTIwYmVhdXR5JTIwYm9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 2495.00,
//   category: 'Fitness',
//   rating: 4.8
// },
// {
//   id: 9,
//   title: 'Celine Medium Classic Bag',
//   img: 'https://images.unsplash.com/photo-1603017975439-4d3f81f740f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsaW5lJTIwYmFnJTIwbWVkaWNpbmclMjBjbGFzc2ljJTIwYm9va3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 6500.00,
//   category: 'Fashion',
//   rating: 4.7
// },
// {
//   id: 10,
//   title: 'Canon EOS R5',
//   img: 'https://images.unsplash.com/photo-1620142907317-3a54d0ebfc90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fub24lMjBlb3MlMjByNSUyMGZsb3JhfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 3799.00,
//   category: 'Electronics',
//   rating: 4.9
// },
// {
//   id: 11,
//   title: 'Samsung 65-inch QLED 4K Ultra HD Smart TV',
//   img: 'https://images.unsplash.com/photo-1617748914498-5c9f7515a634?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMzY1LWluY2glMjBxamVsZWQlMjA0ayUyMGxhZG5lc3MlMjB0dnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 1599.99,
//   category: 'Electronics',
//   rating: 4.7
// },
// {
//   id: 12,
//   title: 'Nespresso Vertuo Next Coffee and Espresso Maker',
//   img: 'https://images.unsplash.com/photo-1595824320541-f91b8a05e108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lc3BsYXNvJTIwdmVydHVvJTIwY29mZmVlJTIwYW5kJTIwZXNwcmVzc28lMjBtYWtlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 199.99,
//   category: 'Kitchen',
//   rating: 4.6
// },
// {
//   id: 13,
//   title: 'Bose QuietComfort 35 II Wireless Headphones',
//   img: 'https://images.unsplash.com/photo-1598648399528-38aa6b0721f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9zZSUyMHF1aXRjb21fd29ybGRzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 299.99,
//   category: 'Electronics',
//   rating: 4.8
// },
// {
//   id: 14,
//   title: 'Patagonia Men\'s Nano Puff Jacket',
//   img: 'https://images.unsplash.com/photo-1604076736478-2bfa836861b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0YWdvbmlhJTIwbWFuJTIwamFja2V0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 199.00,
//   category: 'Fashion',
//   rating: 4.5
// },
// {
//   id: 15,
//   title: 'Sony Alpha a7 III Mirrorless Digital Camera',
//   img: 'https://images.unsplash.com/photo-1543728115-7dd069aa7086?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMGFscGhhJTIwYTclMjBJSUklMjBtaXJyb3JsZXNzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 1999.99,
//   category: 'Electronics',
//   rating: 4.9
// },
// {
//   id: 16,
//   title: 'All-Clad Stainless Steel Cookware Set',
//   img: 'https://images.unsplash.com/photo-1556747331-5b7e386d5a8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxsJTIwY2xhdGglMjBjb29rd2FyZSUyMHNldHRpY2xlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 899.99,
//   category: 'Kitchen',
//   rating: 4.7
// },
// {
//   id: 17,
//   title: 'Apple Watch Series 6',
//   img: 'https://images.unsplash.com/photo-1600252117433-2628d7aa09e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjB3YXRjaCUyMHNlcXVlbmNlJTIwNnx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 399.00,
//   category: 'Electronics',
//   rating: 4.8
// },
// {
//   id: 18,
//   title: 'Lululemon Women\'s Align Pant',
//   img: 'https://images.unsplash.com/photo-1601348902446-67b384a525d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVsdWxlbW9uJTIwd29tZW5zJTIwYWxpZ24lMjBwYW50fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//   price: 98.00,
//   category: 'Fashion',
//   rating: 4.6
// },
