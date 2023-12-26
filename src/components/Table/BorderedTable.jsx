import React, { useEffect } from "react";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer";
import tableData from "../../../public/Json/BasicTable.json";

const BorderTable = () => {
  return (
    <div>
      <ComponentContainer
        title={"Border Table"}
        description={
          "Tables display information in a way that's easy to scan, so that users can look for patterns and insights. Check out code for detail of usage."
        }
      >
        <div className="mt-5">
          <table className="border-collapse w-full m-auto text-left rounded-2xl">
            <thead>
              <tr>
                <th className="border border-slate-300 p-3">#</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Job</th>
                <th className="border border-slate-300">Favourite Color</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata) => (
                <tr>
                  <td className="border border-slate-300 p-3">{tdata.id}</td>
                  <td className="border border-slate-300">{tdata.name}</td>
                  <td className="border border-slate-300">{tdata.job}</td>
                  <td className="border border-slate-300">
                    {tdata.favorite_color}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default BorderTable;
