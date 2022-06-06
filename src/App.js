import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useLocation,
  useEffect,
} from 'react-router-dom';
import Home from './Home';
// import Products from './Products';
import Contact from './Contact';
import Item1 from './images/pet_steps.webp';
import Item2 from './images/golden_collar.webp';
import Item3 from './images/pink_puppy_kit.webp';
import Item4 from './images/spiked_dog_collar.webp';
import Item5 from './images/dog_food2.webp';
import Item6 from './images/dog_food.webp';
import Item7 from './images/natural_bully_sticks.webp';
import Item8 from './images/dog_shoes.webp';

export default function App() {
  return (
    <Router>
      <nav>
        <a href="/" className="nav-brand">
          <img
            src={'https://i.ibb.co/WkRH1wG/husky.png'}
            alt="husky"
            border="0"
            width="20%"
            height="20%"
          />
          <h2>Pup City</h2>
        </a>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/my-cart">
              <i class="icon-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="" element={<ProductsIndex />} />
          <Route path=":slug" element={<DisplayItem />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Products() {
  let location = useLocation();

  return (
    <div className="products">
      {location.pathname === '/products' && (
        <h3 className="products-title">All Products</h3>
      )}
      <Outlet />
    </div>
  );
}

function ProductsIndex() {
  return (
    <ul>
      {Object.entries(products).map(([slug, { name, price, img }]) => (
        <li className="item" key={slug}>
          <Link to={`/products/${slug}`}>
            <div className="flex-box">
              <img src={img} alt={name} />
              <div className="product-info">
                <h3>{name}</h3>
                <h3>{price}</h3>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function DisplayItem() {
  const { slug } = useParams();
  const item = products[slug];

  if (!item) {
    return <h3>Not Found!</h3>;
  }

  const { name, price, img, info } = item;

  return (
    <div className="displayed">
      <img src={img} alt={name} />
      <div className="display-info">
        <h3 className="display-name">{name}</h3>
        <div class="price-line">
          <h3 className="display-price">{price}</h3>
          <button className="add-btn">Add to Cart</button>
        </div>
        <h3>{info}</h3>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>Not found!</h2>
      <h2>Sorry your page was not found!</h2>
    </div>
  );
}

const products = {
  'dog-stairs-gray': {
    name: 'Linen & Foam Dog Stairs',
    price: '$89.99',
    img: Item1,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'golden-collar': {
    name: 'Golden Collar',
    price: '$29.95',
    img: Item2,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'puppy-kit-pink': {
    name: 'Puppy Kit - Pink',
    price: '$25.99',
    img: Item3,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'spiked-dog-collar': {
    name: 'Spiked Dog Collar',
    price: '$25.99',
    img: Item4,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'dog-stairs-gra': {
    name: 'Organix Natural Dog Food',
    price: '$89.99',
    img: Item5,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'golden-colla': {
    name: 'NutriSource Dog Food',
    price: '$29.95',
    img: Item6,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'puppy-kit-pin': {
    name: 'Natural Bully Sticks',
    price: '$25.99',
    img: Item7,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
  'spiked-dog-colla': {
    name: 'Super Cute Dog Shoes',
    price: '$25.99',
    img: Item8,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad aliquid officia praesentium tempora velit amet distinctio hic, esse exercitationem!',
  },
};
