import React, { useEffect } from "react";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer"
import tableData from '../../../public/Json/BasicTable.json'

const FullWidthTable = () => {
  
  return (
    <div>
      <ComponentContainer
        title={"Full Width Table"}
        description={
          "Tables display information in a way that's easy to scan, so that users can look for patterns and insights. Check out code for detail of usage."
        }
      >
        <div className="mt-5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-slate-300">
                <th className="p-3">#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favourite Color</th>
              </tr>
            </thead>
            <tbody>
              {
                tableData.map(tdata => 
                  <tr className="border-b hover:bg-slate-200">
              <td className="p-3">{tdata.id}</td>
              <td>{tdata.name}</td>
              <td>{tdata.job}</td>
              <td>{tdata.favorite_color}</td>
              </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default FullWidthTable;
