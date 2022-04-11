import './App.scss';
import MainPage from 'pages/main-page';
import FavoritePage from 'pages/favorite-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
