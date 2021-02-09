import "./styles.css";
import NutritionList from "./components/Container/NutritionList";
import MainHeader from "./components/Header/Header";
import { Grommet } from "grommet";

export default function App() {
  return (
    <div className="App">
      <Grommet>
        <MainHeader />
        <NutritionList />
      </Grommet>
    </div>
  );
}
