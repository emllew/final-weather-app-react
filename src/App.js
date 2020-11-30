import "./App.css";
import Weather from "./Weather";

function App() {
    return (
      <div className="App">
        <div className="container">
          <div className="morning">
            <Weather defaultCity="London" />
            </div>
            <footer>
              This{" "}
              <a href="https://github.com/emllew/final-weather-app-react" >
                {" "}
                open-source project{" "}
              </a>
              was coded by Emily
            </footer>
        </div>
      </div>
    );
}

export default App;
