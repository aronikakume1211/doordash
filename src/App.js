import './App.css';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restaurant from './components/Restaurant';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<MainBody />} />
          <Route path="/Restaurants/:id" element={<Restaurants />} />
          <Route path='/restaurant/:id/:name/:lat/:lng' element={<Restaurant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
