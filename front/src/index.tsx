import ReactDom from "react-dom/client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import App from "./App";

ReactDom.createRoot(document.getElementById("root") as HTMLElement)
  .render(
    <App />,
  );
