import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>

        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sisandamthabela"
            target="_blank"
            rel="noreferrer"
          >
            Sisanda Mthabela
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/sisandamthabela/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </footer>
      </div>
    </div>
  );
}
