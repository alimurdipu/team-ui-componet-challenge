import React from "react";
import BasicTable from "./BasicTable";
import BorderTable from "./BorderedTable";
import HoverableRows from "./HoverableRows";
import ZebraTable from "./ZebraTable";
import FullWidthTable from "./FullWidthTable";
import FullWidthZebraTable from "./FullWidthZebraTable";

const Table = () => {
  return <div className="flex flex-col m-10 gap-5">
    <BasicTable/>
    <BorderTable/>
    <HoverableRows/>
    <ZebraTable/>
    <FullWidthTable/>
    <FullWidthZebraTable/>
  </div>;
};

export default Table;
