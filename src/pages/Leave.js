import React from "react";
import PageTitles from "../custom_components/PageTitles";
let pageHeaderData = {
  title: "Leave",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "",
};
const Leave = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Leave;
