import React from "react";
import Avatar from "../components/Avatar/Avatar";

const EmployeeCard = () => {
  return (
    <div className="box-shadow3 h-[320px] w-[324px] rounded-[16px] p-5 flex flex-col gap-3">
      <div className=" flex gap-5 items-center">
        <Avatar
          type="img"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          variant="primary"
          badge="wfh"
        />
        <div>
          <p className="font-[600] text-[20px]">Avinash Pawar</p>
          <p className="text-[#666666]">Recruitment Coordinator</p>
        </div>
      </div>
      <div className="text-[#333333] leading-8">
        <p>
          Department : <span className="text-[#666666]"> Design</span>{" "}
        </p>
        <p>
          Date of Joining :{" "}
          <span className="text-[#666666]"> 01-Sept-2022</span>{" "}
        </p>
        <p>
          Shift Time :
          <span className="text-[#666666]">09:00:00 Am To 07:00:00 Pm</span>
        </p>
        <p>
          Mobile No : <span className="text-[#666666]">87384579838</span>
        </p>
        <p>
          Email Id : <span className="text-[#666666]">avinash@gmail.com</span>
        </p>
      </div>
      <button className="bg-[#1765DC] py-2 rounded-[8px] text-[#ffff] text-[16px] font-[600]">
        See More
      </button>
    </div>
  );
};

export default EmployeeCard;
