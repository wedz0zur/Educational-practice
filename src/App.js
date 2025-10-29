import AllProducts from "./components/AllProducts/AllProducts";
import Header from "./components/Header/Header";
import KnowAssortment from "./components/KnowAssortment/KnowAssortment";
import NewCollection from "./components/New-collection/New-collection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NewCollection />
        <KnowAssortment/>
        <AllProducts/>
      </main>
    </div>
  );
}

export default App;
