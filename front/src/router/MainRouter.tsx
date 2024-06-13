import * as ReactRouterDom from "react-router-dom";
import { CustomersPage } from "../pages/CustomersPage";

export function MainRouter() {
  return (
    <ReactRouterDom.Routes>
      <ReactRouterDom.Route path="/" element={<CustomersPage />} />
    </ReactRouterDom.Routes>
  );
}
