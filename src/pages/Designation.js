import React from "react";
import PageTitles from "../custom_components/PageTitles";
let pageHeaderData = {
  title: "Designation",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Add Designation",
};

const Designation = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Designation;
