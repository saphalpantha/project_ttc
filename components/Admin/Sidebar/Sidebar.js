import React from "react";

const Sidebar = () => {
  return (
    <div className="items-center py-3 min-h-screen fixed bg-[#201F54] w-[18%] z-10">
      <div className="flex flex-col py-10 justify-center justify-between min-h-screen   gap-20 items-center px-2">
        <img className="w-1/2" src="/images/sidebar_logo.svg"></img>
        <div className="flex flex-col gap-10 justify-center justify-between items-center">
            {[1,2,3].map(i => (          <div className="flex gap-2">
            <img src=""></img>
            <h1 className="text-white text-xl">Dashboard</h1>
          </div>))}
        </div>
        <div className="flex gap-2">
            <img src=""></img>
            <h1 className="text-white">Setting</h1>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
