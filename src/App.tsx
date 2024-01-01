import MainPage from './MainPage';
import Data from './Data';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='data' element={<Data />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router> 
  );
}

export default App;