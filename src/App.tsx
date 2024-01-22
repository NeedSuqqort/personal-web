import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import About from "./About";
import NotFound from "./NotFound";
const env = process.env.NODE_ENV;

function App() {
  console.log(env);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
