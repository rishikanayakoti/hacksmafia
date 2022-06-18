import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Admin from './components/Admin';
import Apply from './components/Apply';
import Login from './components/Login';


function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"></link>
      <Routes>
        {/* route for home  */}
        <Route path="" element={<Home />} />

        {/* route for podcasts */}
        <Route path="Aboutus" element={<Aboutus />} />


        {/* route for login */}
        <Route path="Login" element={<Login />} />

         <Route path="Admin" element={<Admin />}/> 

        {/* route for TVshows */}
        <Route path="Apply" element={<Apply />} />
        {/* route for Categories
        <Route path="Categories" element={<Categories />} /> */}

      </Routes>
    </div>
  );
}

export default App;
