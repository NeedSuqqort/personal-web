import MainPage from './MainPage';
import Data from './Data';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const env = process.env.NODE_ENV;
  console.log(env);

  return (
    <Router>
      <Routes>
        <Route path={`/${process.env.NODE_ENV === "production" ? "personal-web": ""}`} element={<MainPage />} />
        <Route path='/data' element={<Data />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router> 
  );
}

export default App;