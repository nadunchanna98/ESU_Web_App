import {Routes, Route } from 'react-router-dom';
import {Home , Services , AboutUnion , Events, } from './pages'
import ContactUs from './pages/contactUs/ContactUs.jsx';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutUnion' element={<AboutUnion/>}/>
        <Route path='/events' element={<Events />} />
        <Route path='/ContactUs' element ={<ContactUs/>}/>

      </Routes>
  );
}

export default App;
