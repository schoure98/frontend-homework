import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CharacterPage from "./CharacterPage";
import HousesChart from "./HousesChart";
import Error from "./Error";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/search" element={<CharacterPage />}></Route>
        <Route path="/houses" element={<HousesChart />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
