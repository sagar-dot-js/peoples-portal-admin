import React, { useState } from "react";
import { Link } from "react-router-dom";

let sideBarTabData = [
  {
    title: "Dashboard",
    status: false,
    link: "dashboard",
  },
  {
    title: "Daily Report",
    status: true,
    link: "daily-report",
  },
  {
    title: "Attendance",
    status: false,
    link: "attendance",
  },
  {
    title: "Leave",
    status: false,
    link: "leave",
  },
  {
    title: "Employees",
    status: false,
    link: "employees",
  },
  {
    title: "Designation",
    status: false,
    link: "designation",
  },
  {
    title: "Departments",
    status: false,
    link: "departments",
  },

  {
    title: "Salary",
    status: false,
    link: "salary",
  },
  {
    title: "Timesheet",
    status: false,
    link: "timesheet",
  },
  {
    title: "Shift & Schedule",
    status: false,
    link: "shift-and-schedule",
  },
  {
    title: "Policies",
    status: false,
    link: "policies",
  },
  {
    title: "Resignation",
    status: false,
    link: "resignation",
  },
  {
    title: "Termination",
    status: false,
    link: "termination",
  },
];

const Sidebar = () => {
  let [activeTab, setActiveTab] = useState("Dashboard");

  console.log(activeTab);

  return (
    <div className="box-shadow2 h-full scroll-smooth overflow-y-scroll ">
      <div className="w-full h-[60px] flex items-center custom-px"></div>

      {sideBarTabData.map((item, ind) => {
        return (
          <Link to={item.link}>
            <div
              key={ind}
              className={`w-full  h-[60px] flex items-center custom-px cursor-pointer transition-all duration-500 ${
                activeTab == item.title && "active-tab"
              } `}
              onClick={() => {
                setActiveTab(item.title);
              }}
            >
              <p className="text-[20px] hover:scale-105 transition-transform duration-500">
                {item.title}{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
