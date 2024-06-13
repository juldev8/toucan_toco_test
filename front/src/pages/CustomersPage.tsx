import { CustomersMaster } from "../entities/customers/master";
import { HeaderComponent } from "../components/header";

export function CustomersPage() {
  return (
    <div>
      <h1>Customers Page</h1>
      <div className="m-list-customers">
        <HeaderComponent title="Customer" link="home" destination={-1} />
        <CustomersMaster />
      </div>
    </div>

  );
}
