import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>DEployment Instructions:</h2>

        <h3>Step 1: Fork the Repository</h3>
        <p>
          To deploy this project, first fork the repository{" "}
          <a
            href="https://github.com/alwaysbegrowing/dappling-starter-cra"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            dappling-starter-cra
          </a>{" "}
          by clicking on the "Fork" button at the top right corner of the GitHub
          page.
        </p>

        <h3>Step 2: Visit Dappling.Network</h3>
        <p>
          After forking the repository, visit{" "}
          <a
            href="https://dappling.network"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            dappling.network
          </a>{" "}
          to deploy
        </p>
        <footer style={{ marginTop: 200 }}>
          <p>
            For more detailed information and documentation, please visit the{" "}
            <a
              href="https://docs.dappling.network"
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dappling Documentation
            </a>
            .
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
