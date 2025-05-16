import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import springRolls from "./assets/images/spring-rolls.jpg";
import mozzarellaSticks from "./assets/images/Mozzarella_Sticks.jpg";
import grilledSalmon from "./assets/images/featured-grilled-salmon-recipe.jpg";
import beefBurger from "./assets/images/Beef_Burger.jpg";
import pastaCarbonara from "./assets/images/spaghetti-carbonara-recipe-snippet.jpg";
import chocolateCake from "./assets/images/Chocolate_Cake.jpg";
import cheeseCake from "./assets/images/vanilla-cheesecake-feature.jpg";
import lemonade from "./assets/images/LemonadePitcherOPT.jpg";
import icedCoffee from "./assets/images/iced-coffee-concentrate-DP.jpg";
const category = [
  {
    id: 1,
    name: "Appetizers",
    products: [
      {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls served with sweet chili sauce",
        price: 5.99,
        image: springRolls,
      },
      {
        id: 2,
        name: "Mozzarella Sticks",
        description: "Golden fried mozzarella sticks with marinara sauce",
        price: 4.99,
        image: mozzarellaSticks,
      },
    ],
  },
  {
    id: 2,
    name: "Main Courses",
    products: [
      {
        id: 3,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled to perfection with lemon butter sauce",
        price: 8.99,
        image: grilledSalmon,
      },
      {
        id: 4,
        name: "Beef Burger",
        description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
        price: 9.99,
        image: beefBurger,
      },
      {
        id: 5,
        name: "Pasta Carbonara",
        description: "Creamy pasta with bacon, egg, and parmesan cheese",
        price: 7.99,
        image: pastaCarbonara,
      },
    ],
  },
  {
    id: 3,
    name: "Desserts",
    products: [
      {
        id: 6,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with frosting",
        price: 3.99,
        image: chocolateCake,
      },
      {
        id: 7,
        name: "Cheese Cake",
        description: "Creamy cheesecake with a graham cracker crust",
        price: 2.99,
        image: cheeseCake,
      },
    ],
  },
  {
    id: 4,
    name: "Beverages",
    products: [
      {
        id: 8,
        name: "Fresh Lemonade",
        description: "Refreshing homemade lemonade with mint",
        price: 1.99,
        image: lemonade,
      },
      {
        id: 9,
        name: "Iced Coffee",
        description: "Cold brewed coffee with cream and caramel",
        price: 2.49,
        image: icedCoffee,
      },
    ],
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Body category={category} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;