import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Payslip",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Create Payslip",
};

const Termination = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Termination;
