import React from "react";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Employee",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Register Employee",
};

const Resignation = () => {
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
    </div>
  );
};

export default Resignation;
