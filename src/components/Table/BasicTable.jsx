import React from "react";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer";

const BasicTable = () => {
  return (
    <div>
      <ComponentContainer
        title={"Basic Table"}
        description={
          "Tables display information in a way that's easy to scan, so that users can look for patterns and insights. Check out code for detail of usage."
        }
      >
        <div>
          <table>
            <thead>
              <tr className="">
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favourite Color</th>
              </tr>
            </thead>
            <div className="">
              <td>1</td>
              <td>name</td>
              <td>job</td>
              <td>color</td>
            </div>
          </table>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default BasicTable;
