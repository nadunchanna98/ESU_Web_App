import {Routes, Route } from 'react-router-dom';
import {Home , Services , AboutUnion,Events} from './pages'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutUnion' element={<AboutUnion/>}/>
        <Route path='/events' element={<Events />} />

      </Routes>
  );
}

export default App;
