import './App.css';
import {Home} from './Components/Home';
import About from './Components/About';
import Exclusive from './Components/Exclusive';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes';

console.log(typeof(Home))

function App() {
  return (
    <div className="container">
      <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/exclusive">Exclusive</Link></li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <ProtectedRoutes auth={true} path="/exclusive" element={<Exclusive/> } /> */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/exclusive" element={<Exclusive/>} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;