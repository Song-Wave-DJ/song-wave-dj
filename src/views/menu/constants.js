/* eslint-disable no-restricted-globals */
const Salads = [
  {
    id: self.crypto.randomUUID(),
    title: "Salads",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Caesar Salads",
        url: "https://www.allrecipes.com/thmb/QRg3YwpbTeQ_BZRXuk9pRofWWtM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2433745-44c6996c71b24326b6d31ed694bb738e.jpg",
        price: 234,
        type: "all",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Leafy Green Salad",
        url: "https://www.allrecipes.com/thmb/Em94Nj2QvIQ5QX0sBTaJ7KBAoqc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4539063-2000-5949684bb2a04a8b9a429bb5a45332a4.jpg",
        price: 234,
        type: "all",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Greek Salad",
        url: "https://www.allrecipes.com/thmb/KroyBwHCvPe0cZC-SlOwQ1hLjhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/827520-0770a4963900479c9b0d29b3c828e557.jpg",
        price: 234,
        type: "all",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Cobb Salad",
        url: "https://images.unsplash.com/photo-1605487821615-9dee8d69932e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29iYiUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 234,
        type: "all",
      },
    ],
  },
];

const VegMain = [
  {
    id: self.crypto.randomUUID(),
    title: "Mains",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Veg Kofta curry",
        price: 400,
        type: "veg",
        url: "https://www.yummyfoodrecipes.in/resources/picture/org/Vegetable-Kofta-Curry.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Kadai Paneer",
        price: 425,
        type: "veg",
        url: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "panner butter masala",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Dal makhani",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "magistrate veg biryani",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Mushroom palak",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Vegetable Korma",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Pindi Chole, Onion Stuffed Tandoori Kulcha",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Hot Basil Noodles Veg",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Thai Green Curry ",
        price: 425,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Fried Rice ",
        price: 300,
        type: "veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
    ],
  },
];

const NonVegMain = [
  {
    id: self.crypto.randomUUID(),
    title: "Mains",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Hot Basil Noodles chiken/prawns",
        price: 425,
        type: "non-veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Thai Green Curry Chicken/Prawns",
        price: 425,
        type: "non-veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Fried Rice Chicken/Prawns",
        price: 360,
        type: "non-veg",
        url: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      },
    ],
  },
];

// const VegMenuData = [];
// const NonVegMenuData = [];

const StarterVeg = [
  {
    id: self.crypto.randomUUID(),
    title: "Starter",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Parmesan Crusted Potatoes",
        type: "veg",
        price: 234,
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2023/08/parmesan-crusted-potatoes-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Samosa Recipe",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2016/10/Samosa-recipe-1-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Papdi Chaat (Dahi Papri Chaat)",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2015/07/papdi-chaat-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Samosa Recipe",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2016/10/Samosa-recipe-1-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Papdi Chaat (Dahi Papri Chaat)",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2015/07/papdi-chaat-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Samosa Recipe",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2016/10/Samosa-recipe-1-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Papdi Chaat (Dahi Papri Chaat)",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2015/07/papdi-chaat-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Sweet Corn Chaat (Corn Bhel)",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2016/01/corn-chaat-recipe-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Paneer tikka ",
        price: 234,
        type: "veg",
        url: "https://www.spiceupthecurry.com/wp-content/uploads/2015/07/papdi-chaat-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " French fries",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/10/french-fries-homemade.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Bread pakora",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/03/hara-bhara-kabab-2a.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Manchurian",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/cauliflower-manchurian-recipe-4.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Spring rolls",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/02/spring-rolls-street-food-recipes-11.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Momos",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/03/veg-momos-street-food-recipes-2.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Chilli Potato",
        price: 234,
        type: "veg",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/12/chilli-potato-recipe-1a.jpg",
      },
    ],
  },
];

const StarterNonVeg = [
  {
    id: self.crypto.randomUUID(),
    title: "Starter",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Chicken spring rolls",
        type: "non-veg",
        price: 234,
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/chicken-spring-rolls-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Fish and chicken pakora",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Fish-and-chicken-pakora-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Chilli Prawns",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Chilli-Prawns-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Chicken Manchurian",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Chicken-Manchurian-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "chicken Soups",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Soups-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Cheese omelet",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Vegetable-cheese-omelet-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Meatballs",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Meatballs-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Chicken Patties",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Chicken-Patties-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Kebab chaat",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Kebab-chaat-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Keema samosa",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Keema-samosa-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: " Butter chicken Pani puri",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Delicious-Butter-chicken-Pani-puri-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Chicken Majestic",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Chicken-Majestic-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Egg 65",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Seekh-kebabs-Delicious-Indian-Non-Veg-Starters.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Seekh kebabs",
        price: 234,
        type: "non-veg",
        url: "https://sulthansbiriyani.in/wp-content/uploads/2021/04/Seekh-kebabs-Delicious-Indian-Non-Veg-Starters.jpg",
      },
    ],
  },
];

export const AllData = [
  {
    id: self.crypto.randomUUID(),
    title: "Starter",
    menus: [...StarterVeg[0].menus, ...StarterNonVeg[0].menus],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Mains",
    menus: [...VegMain[0].menus, ...NonVegMain[0].menus],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Veg",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
        price: 234,
        type: "veg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "veg",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "veg",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Non-Veg",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
        price: 234,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "Non-veg",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "Non-veg",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTIpliTjhKiP_A6ogXmur1B7zjJCPM7TeA&usqp=CAU",
      },
    ],
  },
  ...Salads,
];

export const VegData = [
  ...StarterVeg,
  ...VegMain,
  {
    id: self.crypto.randomUUID(),
    title: "Veg",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        type: "veg",

        price: 234,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "veg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "veg",
      },
    ],
  },
  ...Salads,
];

export const NonVegData = [
  ...StarterNonVeg,
  {
    id: self.crypto.randomUUID(),
    title: "Main course",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",

        type: "veg",

        price: 234,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "veg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        type: "veg",
        price: 234,
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Non-Veg",
    type: "Non-Veg",

    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        type: "Non-Veg",

        price: 234,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "Non-Veg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Burger Recipe",
        price: 234,
        type: "Non-Veg",
      },
    ],
  },
  ...Salads,
];

export const DrinksData = [
  {
    id: self.crypto.randomUUID(),
    title: "Votka",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Beluga hunting berry",
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: false,
        price: 899,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Beluga hunting herbal",
        available: false,
        price: 899,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Beluga Nobel",
        available: false,
        price: 775,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Grey goose",
        available: false,
        price: 625,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Absolute elyx",
        available: false,
        price: 599,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Ciroc",
        available: false,
        price: 652,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },

      {
        id: self.crypto.randomUUID(),
        title: "Finlandia",
        available: true,
        price: 450,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Ketel one",
        available: true,
        price: 435,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Absolute blue",
        available: true,
        price: 425,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Smirnoff",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Smirnoff flavours",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Rum",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Bacardi carta blanca",
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 250,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Bacardi gold",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Bacardi black",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Bacardi flavours",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Captain morgan",
        available: true,
        price: 199,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Old Monk",
        available: true,
        price: 199,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Cocktails",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "long island iced tea",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 250,
        type: "drink",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Rock lobster",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Riders on the strom",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Cucumber ginito",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Sangria red",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Bluegrass lemonade",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Hannah's rum punch",
        available: true,
        price: 400,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Whiskey",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Chivas Regal 18 yo",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 999,
        type: "drink",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Jonnnie walker gold label reserve",
        available: true,
        price: 999,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Dewar's 18 yo",
        available: true,
        price: 799,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Dewar's 15 yo",
        available: true,
        price: 799,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Jonnnie walker double black",
        available: true,
        price: 799,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "monkey shoulder",
        available: true,
        price: 699,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "dewar's 12 yo",
        available: true,
        price: 699,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Jonnnie walker red label",
        available: true,
        price: 450,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Black dog triple gold reserve",
        available: true,
        price: 450,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Teacher's 50",
        available: true,
        price: 425,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "100 pipers 12 yo",
        available: true,
        price: 425,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "100 pipers 8 yo",
        available: true,
        price: 424,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Drwar's white label",
        available: true,
        price: 399,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Brandy",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Roulette brandy",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 275,
        type: "drink",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Mc.Dowell's No.1",
        available: true,
        price: 199,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Bottled",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "Kingfisher Premium",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 250,
        type: "drink",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Kingfisher ultra",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Heineken silver",
        available: true,
        price: 250,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
  {
    id: self.crypto.randomUUID(),
    title: "Wines",
    quantity: "30",
    menus: [
      {
        id: self.crypto.randomUUID(),
        title: "big banyan sauvignon blanc",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
        available: true,
        price: 375,
        type: "drink",
      },
      {
        id: self.crypto.randomUUID(),
        title: "fratelli chenin blanc",
        available: true,
        price: 375,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "fratelli chardonnay",
        available: true,
        price: 375,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "big banyan shiraz",
        available: true,
        price: 375,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "big banyan merlot",
        available: true,
        price: 375,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
      {
        id: self.crypto.randomUUID(),
        title: "Fratelli cabernet sauvignon",
        available: true,
        price: 375,
        type: "drink",
        url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/waterStrawberry-ST-040820-770x533-1.jpg",
      },
    ],
  },
];
