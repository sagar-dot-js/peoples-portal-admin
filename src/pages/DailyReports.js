import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import Chip from "../components/Chips/Chip";
import Dropdown from "../components/Dropdown/Dropdown";
import Search from "../components/Search/Search";
import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import TablePagination from "../components/Table/TablePagination";
import FilterAndSearch from "../custom_components/FilterAndSearch";
import PageTitles from "../custom_components/PageTitles";

let pageHeaderData = {
  title: "Daily Reports",
  subTitle: "Welcome to Mirats Admin Dashboard",
};

const statusColors = {
  unseen: "error",
  seen: "primary",
  approved: "success",
};

const data1 = [
  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },
  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },

  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },
  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },

  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },
  {
    id: 33333333,
    Name: "Avinash Pawar",
    Designation: "Recruitment Coordinator",
    Department: "Sales and Business Development",
    ShiftTime: "09:00:00 Am To 07:00:00 Pm",
    CheckIn: "00:00:00 Am",
    CheckOut: "00:00:00 Am",
    Overtime: "00:00:00 Hrs",
    Duration: "00:00:00 Hrs",
    Status: "On Time",
  },
];
const DailyReports = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const dropdownData = ["one", "two", "three"];

  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col px-[70px]">
      <PageTitles data={pageHeaderData} />

      <section>
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
        {/* Table */}

        <div className="tableTest py-[40px]">
          <TableActionPopUp selectedRows={selectedRows}>
            {/* <button onClick={(e) => console.log(e)}>Edit</button> */}
          </TableActionPopUp>
          <TableWithPagination>
            <Table>
              <TableHead>
                <TableRow>
                  <Th></Th>
                  <Th>
                    <p> Name / Designation </p>{" "}
                  </Th>
                  <Th>Department</Th>
                  <Th>Shift Time</Th>
                  <Th>Check In</Th>
                  <Th>Check Out</Th>
                  <Th>Overtime</Th>
                  <Th>Duration</Th>
                  <Td>Status</Td>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1
                  ?.slice(
                    pageNumber * rowsPerPage - rowsPerPage,
                    pageNumber * rowsPerPage
                  )
                  .map((d, i) => {
                    return (
                      <TableRow key={i}>
                        <Link
                          href="https://mui.com/material-ui/react-accordion/"
                          color="black"
                          border="underline"
                        >
                          {" "}
                          <Td>
                            {" "}
                            <Avatar
                              type="img"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              variant="primary"
                              badge="wfh"
                            />
                          </Td>
                        </Link>

                        <Td>
                          <div>
                            <p>{d.Name} </p>{" "}
                            <p className="text-[14px] text-[#666666]">
                              {d.Designation}
                            </p>
                          </div>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.Department}{" "}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.ShiftTime}{" "}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.CheckIn}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.CheckOut}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.Overtime}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.Duration}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.Status}
                          </p>
                        </Td>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalDataCnt={data1.length}
            />
          </TableWithPagination>
        </div>
      </section>
      <section>
        <div className="   flex flex-col gap-4">
          <p className="text-[24px]">Leave Report on September 28, 2022</p>
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
        {/* Table */}

        <div className="tableTest py-[40px]">
          <TableActionPopUp selectedRows={selectedRows}>
            {/* <button onClick={(e) => console.log(e)}>Edit</button> */}
          </TableActionPopUp>
          <TableWithPagination>
            <Table>
              <TableHead>
                <TableRow>
                  <Th></Th>
                  <Th>
                    <p> Name / Designation </p>{" "}
                  </Th>
                  <Th>Department</Th>
                  <Th>Shift Time</Th>
                  <Th>Check In</Th>
                  <Th>Check Out</Th>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1
                  ?.slice(
                    pageNumber * rowsPerPage - rowsPerPage,
                    pageNumber * rowsPerPage
                  )
                  .map((d, i) => {
                    return (
                      <TableRow key={i}>
                        <Link
                          href="https://mui.com/material-ui/react-accordion/"
                          color="black"
                          border="underline"
                        >
                          {" "}
                          <Td>
                            {" "}
                            <Avatar
                              type="img"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              variant="primary"
                              badge="wfh"
                            />
                          </Td>
                        </Link>

                        <Td>
                          <div>
                            <p>{d.Name} </p>{" "}
                            <p className="text-[14px] text-[#666666]">
                              {d.Designation}
                            </p>
                          </div>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.Department}{" "}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.ShiftTime}{" "}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.CheckIn}
                          </p>
                        </Td>
                        <Td>
                          <p className="text-[14px] text-[#666666]">
                            {d.CheckOut}
                          </p>
                        </Td>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalDataCnt={data1.length}
            />
          </TableWithPagination>
        </div>
      </section>
    </div>
  );
};

export default DailyReports;
