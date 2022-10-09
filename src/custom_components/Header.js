import React from "react";
import Logo from "../assets/logo.png";
import Speaker from "../assets/speaker.png";
import { FaRegBell } from "react-icons/fa";
import Avatar from "../components/Avatar/Avatar";

const Header = () => {
  return (
    <div className="h-full custom-px flex items-center justify-between box-shadow1">
      <div>
        <img src={Logo} />
      </div>
      <div className=" flex  items-center">
        <div className="flex gap-5 items-center">
          <div>
            <FaRegBell className="text-3xl text-[#000000]" />
          </div>
          <div>
            {" "}
            <img src={Speaker} />{" "}
          </div>
          <div className="border border-[#333333] px-[40px] py-2 rounded-3xl">
            {" "}
            Mirats ID
          </div>
          <div className="text-[#333333]">
            <p className="text-[20px] font-[400]">
              Good Morning,<span> Sagar</span>{" "}
            </p>
            <p className="text-[14px] ">Recruitment Coordinator</p>
          </div>
          <div>
            {/* <div className="h-[50px] w-[50px] rounded-[50%] border"></div> */}

            <Avatar
              type="img"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              variant="primary"
              badge="wfh"
            />
            {/* <Avatar
              type="img"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              variant="success"
              size="lg"
            />{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
