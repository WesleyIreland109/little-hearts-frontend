import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Enrollment from './pages/Enrollment';
import GetInvolved from './pages/GetInvolved';
import ForParents from './pages/ForParents';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/for-parents" element={<ForParents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
