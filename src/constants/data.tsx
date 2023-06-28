import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { MdSoupKitchen } from "react-icons/md";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  GiBread,
  GiCheeseWedge,
  GiDoughRoller,
  GiHotSpices,
  GiMeat,
  GiPickle,
  GiSaucepan,
  GiTomato,
} from "react-icons/gi";
type social = {
  address: string;
  name: string;
};

export type person = {
  _id: string;
  name: string;
  role: number;
  salary?: number;
  age?: number;
  jobTitle?: string;
  image?: string;
  social?: social[];
};
export const socialIcons: {
  [x: string]: {
    icon: any;
    color: string;
  };
} = {
  facebook: {
    icon: <BsFacebook />,
    color: "#4267B2",
  },
  instagram: {
    icon: <AiFillInstagram />,
    color: "#cd486b",
  },
  linkedin: {
    icon: <BsLinkedin />,
    color: "#0ff",
  },
  gmail: {
    icon: <SiGmail />,
    color: "#DB4437",
  },
};
export const makeFood = {
  pizza: {
    base: ["classic", "thin & crispy", "thick crust"],
    toppings: [
      "mushrooms",
      "peppers",
      "onions",
      "olives",
      "extra cheese",
      "tomatoes",
    ],
  },
  burger: {
    base: ["chicken", "meet"],
    toppings: [
      "egs",
      "peppers",
      "onions",
      "olives",
      "extra cheese",
      "tomatoes",
    ],
  },
};
export const makeYourFood = {
  pizza: {
    typeToChose: [
      {
        title: "dough",
        icon: GiDoughRoller,
        options: [
          "Regular Pizza Dough",
          "Whole Grain Pizza Dough",
          "Whole Wheat Pizza Dough",
          "Gluten-Free Pizza Dough",
          "Pizza Dough for Specific Styles",
        ],
      },
      {
        title: "bread",
        icon: GiBread,
        options: [
          "White Flour Bread",
          "Whole Wheat Bread",
          "Multigrain Bread",
          "Oat Bread",
          "Corn Bread",
        ],
      },
      {
        title: "sauces",
        icon: GiSaucepan,
        options: [
          "Traditional Tomato Sauce: Made with cooked canned tomatoes",
          "Barbecue Sauce: A thick and rich sauce based on a combination of tomatoes, vinegar, sugar, and spices",
          "Ricotta Sauce: A creamy sauce made with ricotta cheese, an Italian cheese",
          "Olive Oil and Garlic Sauce: Made with a mixture of olive oil and minced garlic",
          "Pesto Sauce: Made with basil, oil, cheese, and garlic",
          "Spicy Pepper Sauce: Made with a blend of minced hot peppers, oil, and spices",
          "Mushroom Sauce: Made with cooked and mashed mushrooms, olive oil, garlic, onion, and spices",
        ],
      },
    ],
    typesToAdd: [
      {
        title: "spices",
        icon: GiHotSpices,
        options: [
          "Oregano",
          "Minced Garlic",
          "Chopped Onion",
          "Crushed Red Pepper",
          "Red Pepper Flakes",
          "Chopped Parsley",
          "Thyme",
          "Paprika",
        ],
      },
      {
        title: "vegetables",
        icon: GiTomato,
        options: [
          "Green bell pepper",
          "Red bell pepper",
          "Onion",
          "Olives",
          "Tomato",
          "Mushroom",
          "Cherry tomatoes",
          "Basil",
          "Corn",
        ],
      },
      {
        title: "cheese",
        icon: GiCheeseWedge,
        options: [
          "Parmesan Cheese",
          "Mozzarella di Bufala",
          "Gouda Cheese",
          "Feta Cheese",
          "Blue Cheese",
        ],
      },
      {
        title: "meats",
        icon: GiMeat,
        options: [
          "Sausage",
          "Pepperoni",
          "Chicken",
          "Ground beef",
          "Salami",
          "Smoked salmon",
          "Roast beef",
          "Roast turkey",
        ],
      },
    ],
  },
  burger: {
    typeToChose: [
      {
        title: "dough",
        icon: GiDoughRoller,
        options: [
          "Ground Meat Dough",
          "Chicken Dough",
          "Fish Dough",
          "Vegetable Dough",
          "Chickpea Dough",
        ],
      },
      {
        title: "bread",
        icon: GiBread,
        options: [
          "Hamburger Bun",
          "Sesame Bun",
          "Panini Bread",
          "Kaiser Roll",
          "Cornbread",
        ],
      },
      {
        title: "meat",
        icon: GiMeat,
        options: [
          "Beef",
          "Lamb meat",
          "Duck meat",
          "Fish",
          "Plant-based alternatives",
        ],
      },
      {
        title: "cheese",
        icon: GiCheeseWedge,
        options: [
          "Cheddar Cheese",
          "Mozzarella Cheese",
          "Blue Cheese",
          "Swiss Cheese",
          "Provolone Cheese",
          "Feta Cheese",
          "Brie Cheese",
        ],
      },
    ],
    typesToAdd: [
      {
        title: "vegetables",
        icon: GiTomato,
        options: [
          "Tomato slices",
          "Onion slices",
          "Cucumber slices",
          "Lettuce leaves",
          "Sweet pepper slices",
          "Hot pepper slices",
          "Parsley or cilantro leaves",
          "spinach or arugula",
        ],
      },
      {
        title: "pickles",
        icon: GiPickle,
        options: [
          "Cucumber pickles",
          "Pickled onions mixed with vinegar and sugar",
          "mix of pickled carrots, apricot, and cauliflower",
          "Chopped olive pickles",
          "Hot pepper pickles",
        ],
      },
      {
        title: "Sauces and condiments",
        icon: GiSaucepan,
        options: [
          "ketchup",
          "mayonnaise",
          "mustard",
          "barbecue sauce",
          "garlic sauce",
          "ranch dressing",
          "relish",
          "jalapeno (Hot sauces)",
          "sriracha (Hot sauces)",
          "buffalo (Hot sauces)",
        ],
      },
      {
        title: "spices",
        icon: GiHotSpices,
        options: [
          "Sea Salt and Black Pepper",
          "BBQ Seasoning: It includes ingredients such as paprika, cumin, garlic powder, onion powder, black pepper, and salt",
          "Steak Seasoning: Typically contains ingredients like garlic powder, onion powder, black pepper, salt, and paprika",
          "Shawarma Seasoning: Usually includes ingredients like cumin, ground coriander, dried coriander, garlic powder, and paprika",
          "Fajita Seasoning: Typically contains ingredients like cumin, garlic powder, paprika, and hot pepper",
        ],
      },
      {
        title: "special",
        icon: MdSoupKitchen,
        options: [
          "Fried onions",
          "Caramelized onions",
          "Grilled mushroom",
          "fried egg",
          "soft-boiled egg",
          "Avocado slices",
          "slices of tart apples",
          "grilled pineapple",
        ],
      },
    ],
  },
};
