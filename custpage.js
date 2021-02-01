import React from "react";
import { Table } from "reactstrap";

function custPage() {
  return (
    <div style={{ backgroundColor: "Aquamarine" }}>
      <h1 id="head" style={{ color: "blueviolet" }}>
        Account
      </h1>
      <h3 style={{ color: "chocolate" }}>My Cart</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Book Name </th>
            <th>Author Name</th>
            <th>User Name</th>
            <th>Quantity</th>
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <button id="add">+</button>
            <button id="remove">-</button>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td></td>

            <button id="add">+</button>
            <button id="remove">-</button>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td></td>
            <button id="add">+</button>
            <button id="remove">-</button>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default custPage;
