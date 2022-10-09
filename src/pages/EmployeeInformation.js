import React from "react";
import TabContext, {
  Tab,
  TabList,
  TabPanel,
} from "../components/Tab/TabContext";
import EmployeeCardLarge from "../custom_components/EmployeeCardLarge";

const EmployeeInformation = () => {
  return (
    <div className="py-[40px] px-[70px]">
      <EmployeeCardLarge />
    </div>
  );
};

export default EmployeeInformation;
