import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import NotFound from "./NotFound";
import Details from "./Details";
const env = process.env.NODE_ENV;

function App() {
  console.log(env);

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
