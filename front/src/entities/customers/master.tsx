import React from "react";
import * as CustomersFetcherService from "../../services/domain/customers/fetcher";

export function CustomersMaster() {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    CustomersFetcherService.getCustomers()
      .then((result:any) => {
        setCustomers(result);
      });
  }, []);

  return (
    <div className="m-ui-master m-ui-customers-master">
      <h5 className="title">
        List of customers
      </h5>
      <ul>
        {customers.map((el:any, index) => (
          <li key={index}>
            <div className="element-customers">
              <div className="customer">
                <h5 className="project-name">
                  {el.name}
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
