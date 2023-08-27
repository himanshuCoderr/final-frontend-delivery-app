import React, { useState } from "react";
import logo from "../images/logo.png";
import Avatar from "../images/Avatar.PNG";
import { useAuth } from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
function Navbar() {
  let show = false;
  const [showOption, setShowOption] = useState(false);
  const { loginStatus } = useAuth();
  const { loggedUserData } = useAuth();
  const  {setLoginStatus} = useAuth();
  const {setLoggedUserData} = useAuth()

  const changeDisplay = () => {
    setShowOption(!showOption);
  };

  const userLogout = () => {
      setLoginStatus(false)
      setLoggedUserData({})
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <Link to="/">
          <img src={logo} alt="" className="w-7 xl:w-10 lg:w-10 md:w-8 rounded-full" />
        </Link>
        <h2 className="lg:text-2xl text-[12px] ml-2 font-semibold ">YUMMIES DELIVERY APP</h2>
      </div>
      <div className="flex items-center ">
        {loginStatus ? (
          <>
            <Link to="/myCart">
              <p className="mx-2 lg:text-lg md:text-lg text-[13px] font-semibold">Cart</p>
            </Link>
            <Link to="/userProfile">
              <p className="mx-2  lg:text-lg md:text-lg text-[13px] text-lg font-semibold ">
                {loggedUserData.name}
              </p>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <p className="mx-2  lg:text-lg md:text-lg text-[13px] font-semibold">Login</p>
          </Link>
        )}
        <div className="relative">
          <img src={Avatar} alt="" className="w-12" onClick={changeDisplay} />
          {showOption && (
            <section
              className="absolute bg-white p-2 rounded shadow"
              style={{
                display: showOption,
                right: "0",
                top: "120%",
                zIndex: "90",
                zIndex: "90",
              }}
            >
              <Link to="/userProfile">
                <option value="profile" key="">
                  Profile
                </option>
              </Link>

              <option onClick={userLogout} value="profile" key="">
                Log Out
              </option>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
