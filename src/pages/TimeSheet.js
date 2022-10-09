import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Timesheet",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "",
};
const TimeSheet = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default TimeSheet;
