
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
      <MealsSummary/>
      </main>
    </Fragment>
  );
}

export default App;
