// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleSelectProduct = (product) => {
    const newItem = {
      id: product.id,
      firstName: product.firstName,
      lastName: product.lastName,
      price: Math.floor(Math.random() * 100) + 1 // Random price for demonstration
    };

    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <ProductList onSelectProduct={handleSelectProduct} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;

