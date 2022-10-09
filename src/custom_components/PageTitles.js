import React from "react";

const PageTitles = ({ data }) => {
  return (
    <div className=" py-[50px]  flex items-center justify-between ">
      <div className="">
        <p className="text-[#1765DC] text-[32px] ">{data.title}</p>
        <p className="text-[#8CB5F3] text-[16px]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Admin
          Dashboard
        </p>
      </div>
      <div>
        {data.btnTitle && (
          <button className="bg-[#1765DC] px-4 h-[56px] rounded-[8px] text-[16px] text-[#FFFFFF]">
            {data.btnTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageTitles;
