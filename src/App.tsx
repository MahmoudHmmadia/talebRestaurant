import { Route, Routes } from "react-router-dom";
import MakeYourFood from "./pages/makeYourFood";
import Menu from "./pages/menu";
import "./sass/app.scss";
import Welcome from "./pages/welcome/Welcome";
import Popular from "./pages/popular";
import Team from "./pages/team";
function App() {
  return (
    <div className="app overflow-hidden">
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="menu" element={<Menu />} />
          <Route path="popular" element={<Popular />} />
          <Route path="team" element={<Team />} />
          <Route path="makeYourFood" element={<MakeYourFood />} />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
