import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Animal selectedAnimal={"cat"} />
    </div>
  );
}

export default App;
