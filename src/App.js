import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/CatalogPage";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import AdvertModal from "./components/AdvertModal";
import "./assets/styles/styles.css";

const App = () => {
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const handleShowMore = (advert) => {
    setSelectedAdvert(advert);
  };

  const handleCloseModal = () => {
    setSelectedAdvert(null);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={<CatalogPage onShowMore={handleShowMore} />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        {selectedAdvert && (
          <AdvertModal advert={selectedAdvert} onClose={handleCloseModal} />
        )}
      </div>
    </Router>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";

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
