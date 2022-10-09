import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Shift & Schedule",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Add Shifts Time",
};

const ShiftAndSchedule = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default ShiftAndSchedule;
