import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}