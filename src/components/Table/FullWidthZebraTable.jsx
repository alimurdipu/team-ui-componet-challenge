import React, { useEffect } from "react";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer"

const FullWidthZebraTable = () => {
  
  return (
    <div>
      <ComponentContainer
        title={"Full Width Zebra Table"}
        description={
          "Tables display information in a way that's easy to scan, so that users can look for patterns and insights. Check out code for detail of usage."
        }
      >
        <div className="mt-5">
          <table className="w-full mx-auto text-left">
            <thead className="bg-slate-300">
              <tr>
                <th className="p-3 ">#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favourite Color</th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b">
              <td className="p-3">1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr className="border-b bg-slate-200">
              <td className="p-3">2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">3</td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr className="border-b bg-slate-200">
              <td className="p-3">4</td>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Crimson</td>
            </tr>
            </tbody>
          </table>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default FullWidthZebraTable;
