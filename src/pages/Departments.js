import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Departments",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Add Department",
};

const Departments = () => {
  return (
    <div className="px-[70px]">
      {" "}
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Departments;
