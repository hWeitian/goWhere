import logo from "./logo.svg";
import "./App.css";
import { Index } from "./Pages/Index/Index";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App-header">
      {/* <header className="App-header"> */}
      <Box
        sx={{
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        NavBar
      </Box>
      <Index />
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello!!!</p> */}
      {/* </header> */}
    </div>
  );
}

export default App;
