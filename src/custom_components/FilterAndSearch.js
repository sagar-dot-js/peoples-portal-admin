import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";
import Search from "../components/Search/Search";

const dropdownData = ["one", "two", "three"];

const FilterAndSearch = () => {
  return (
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
  );
};

export default FilterAndSearch;
