import MainPage from './MainPage';
import Data from './Data';
import NotFound from './NotFound';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const env = process.env.NODE_ENV;

function App() {
  console.log(env);
  console.log(navigator);

  const [mode,setmode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "Light" : "Dark");

  useEffect(() => {
    document.querySelector("html")?.classList.add(`${mode === "Light" ? "dark-mode" : "light-mode"}`);
  },[]);

  const ToggleLightDark = () => {
      const page = document.querySelector('html');
      page?.classList.toggle('light-mode');
      page?.classList.toggle('dark-mode');
      setmode(mode === "Light" ? "Dark" : "Light");
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path={`/${env === "production" ? "personal-web" : ""}`} element={<MainPage />} />
          <Route path='/data' element={<Data />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router> 
      <button className="fixed top-6 right-6" onClick={ToggleLightDark}>Change to {mode} mode</button>
      <Footer />
    </>
  );
}

export default App;