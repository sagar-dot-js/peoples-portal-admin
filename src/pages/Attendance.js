import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Attendance",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Download Excel sheet",
};

const Attendance = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Attendance;
