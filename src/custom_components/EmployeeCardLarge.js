import React from "react";
import userImage from "../assets/empImage.jpg";

const EmployeeCardLarge = () => {
  return (
    <div className="h-[300px] box-shadow2 rounded-[16px] p-5 flex gap-10 items-center">
      <div className="w-40%">
        <div className="h-[200px] w-[200px] rounded-full ">
          <img
            src={userImage}
            className="h-full w-full object-cover rounded-full"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col gap-5  w-[100%] ">
        <div>
          <p className="text-[48px]"> Avinash Pawar</p>
          <p className="text-[24px] text-[#666666]">Recruitment Coordinator</p>
        </div>
        <div className=" grid grid-cols-2 ">
          <p className="text-[#333333] font-[600]">
            Department :{" "}
            <sapn className="text-[#666666] font-[400]">
              {" "}
              User Interface Design
            </sapn>{" "}
          </p>
          <p className="text-[#333333] font-[600]">
            {" "}
            Email Id :{" "}
            <sapn className="text-[#666666] font-[400]">
              avinashpawar123@gmail.com{" "}
            </sapn>
          </p>
          <p className="text-[#333333] font-[600]">
            Shift Time :{" "}
            <sapn className="text-[#666666] font-[400]">
              {" "}
              9:00:00 Am To 07:00:00Pm
            </sapn>{" "}
          </p>
          <p className="text-[#333333] font-[600]">
            Date of Joining :{" "}
            <sapn className="text-[#666666] font-[400]"> 01-Sept-2022 </sapn>
          </p>
          <p className="text-[#333333] font-[600]">
            Mobile No :{" "}
            <sapn className="text-[#666666] font-[400]">8467894549 </sapn>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCardLarge;
