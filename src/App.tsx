import MainPage from './MainPage';
import Data from './Data';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const env = process.env.NODE_ENV;
  console.log(env);

  const mode = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "Light" : "Dark");
  useEffect(() => {
    document.querySelector("html")?.classList.add(`${mode === "Light" ? "dark-mode" : "light-mode"}`);
  },[]);

  return (
    <>
      <Router>
        <Routes>
          <Route path={`/${env === "production" ? "personal-web" : ""}`} element={<MainPage />} />
          <Route path='/data' element={<Data />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;