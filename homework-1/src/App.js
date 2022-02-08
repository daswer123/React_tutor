import "./App.css";
import Hello from "./components/Hello";
import HelloClass from "./components/HelloClass";

function App() {
  return (
    <div className="App">
      <Hello name="Вася" date={new Date(2021, 5, 22)} />
      <HelloClass name="Петя" date={new Date(2022, 3, 5)} />
    </div>
  );
}

export default App;
