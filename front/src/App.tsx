import * as ReactRouterDom from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <div className="app">
      <ReactRouterDom.BrowserRouter>
        <MainRouter />
      </ReactRouterDom.BrowserRouter>

    </div>
  );
}

export default App;
