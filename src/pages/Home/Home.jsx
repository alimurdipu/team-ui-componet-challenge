import React from "react";
import ElementsLink from "./ElementsLink";
import ComponentsLink from "./ComponentsLink";

const Home = () => {
  return (
    <div className="p-10 pb-0 flex flex-row gap-5">
      {/* Elements */}
      <div className="w-4/12  ">
        <h2 className="text-xl font-bold border-b mb-3 pb-1">Element List</h2>
        <div className="flex overflow-y-scroll  flex-col gap-1 h-[85vh] shadow-2xl shadow-primary">
          <ElementsLink />
        </div>
      </div>
      {/* Components */}
      <div className="w-4/12 ">
        <h2 className="text-xl font-bold border-b mb-3 pb-1">Component List</h2>
        <div className="flex flex-col gap-1 h-[85vh] shadow-2xl shadow-primary overflow-y-scroll">
          <ComponentsLink />
        </div>
      </div>
    </div>
  );
};

export default Home;
