import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./custom_components/Header";
import Sidebar from "./custom_components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DailyReports from "./pages/DailyReports";
import Leave from "./pages/Leave";
import Employees from "./pages/Employee";
import Designation from "./pages/Designation";
import Departments from "./pages/Departments";
import Salary from "./pages/Salary";
import Timesheet from "./pages/TimeSheet";
import ShiftAndSchedule from "./pages/ShiftAndSchedule";
import Policies from "./pages/Policies";
import Resignation from "./pages/Resignation";
import Termination from "./pages/Termination";
import Attendance from "./pages/Attendance";
import GlobalStyles from "./globalStyles";
import Test from "./pages/Test";
import EmployeeInformation from "./pages/EmployeeInformation";

const App = () => {
  return (
    <div className=" h-screen w-full">
      <GlobalStyles />
      <div className=" h-[8%] ">
        {" "}
        <Header />{" "}
      </div>
      <div className=" h-[92%] flex">
        <div className=" w-[360px] h-full">
          <Sidebar />
        </div>
        <div className=" w-full overflow-y-scroll ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/daily-report" element={<DailyReports />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/designation" element={<Designation />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/shift-and-schedule" element={<ShiftAndSchedule />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/resignation" element={<Resignation />} />
            <Route path="/termination" element={<Termination />} />
            <Route
              path="/employees/employee-information"
              element={<EmployeeInformation />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
