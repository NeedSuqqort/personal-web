import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
