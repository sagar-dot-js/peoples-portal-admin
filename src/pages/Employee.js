import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";
import Search from "../components/Search/Search";
import EmployeeCard from "../custom_components/EmployeeCard";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Employee",
  subTitle: "Welcome to Mirats Admin Dashboard",
  btnTitle: "Register Employee",
};

let EmployeeCardData = [
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
  {
    empname: "Avinash Pawar",
    designation: "Recruitment Coordinator",
    Department: "Design",
    DateofJoining: "01-Sept-2022",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    MobileNo: "87384579838",
    EmailId: "avinash@gmail.com",
  },
];
const Employee = () => {
  const dropdownData = ["one", "two", "three"];
  return (
    <div className="px-[70px]">
      <PageTitles data={pageHeaderData} />
      {/* Filter */}
      <div className="   flex flex-col gap-4">
        <p className="text-[24px]">Attendance Report on September 28, 2022</p>
        <div className=" flex justify-between">
          <div className="flex gap-3 items-end">
            <Dropdown dropdownText="amsdhkjasdh" options={dropdownData} />
            <Dropdown dropdownText="amsdhkjasdh" options={dropdownData} />
            <Link
              color="#5C96EE"
              border="underline"
              href="https://scalablecss.com/styled-components-global-styles/"
            >
              View All
            </Link>
          </div>
          <div className="flex items-end">
            <Search />
          </div>
        </div>
      </div>
      <div className=" py-[40px] grid grid-cols-3 gap-5">
        {EmployeeCardData.map((item) => {
          return (
            <Link to="employee-information">
              <EmployeeCard />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Employee;
