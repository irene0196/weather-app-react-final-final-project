import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Glasgow"/>
        <footer>
          <p>
            This project was coded by Irene and is{" "}
            <a href="https://github.com/irene0196/weather-app-react-final-final-project">
              open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
