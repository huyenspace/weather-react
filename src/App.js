import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/huyenspace/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Huyen Nguyen
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/huyenspace/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
      </p>
    </div>
  );
}
