import React from "react";
import { Link } from "react-router-dom";

const ComponentsLink = () => {
  return (
    <>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/accordion"}
      >
        accordion
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/collapse"}
      >
        collapse
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/tab"}
      >
        tab
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/dropdown"}
      >
        dropdown
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/popover"}
      >
        popover
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/modal"}
      >
        modal
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/drawer"}
      >
        drawer
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/steps"}
      >
        steps
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/timeline"}
      >
        timeline
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/pagination"}
      >
        pagination
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/menu-list"}
      >
        menu-list
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/treeview"}
      >
        treeview
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/table"}
      >
        table
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/table-advanced"}
      >
        table-advanced
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/table-gridjs"}
      >
        table-gridjs
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/apexcharts"}
      >
        apexcharts
      </Link>

      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/carousel"}
      >
        carousel
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/notification"}
      >
        notification
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/clipboard"}
      >
        clipboard
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/persist"}
      >
        persist
      </Link>
      <Link
        className="text-white bg-slate-900 py-2 px-5 rounded-sm"
        to={"/components/monochrome-mode"}
      >
        monochrome-mode
      </Link>
    </>
  );
};

export default ComponentsLink;
