import React, { useEffect, useState } from "react";
import Logo from "../../src/images/logo.png";
import { EmailOutlined } from "@mui/icons-material";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useAuth } from "../AuthContext/AuthContext";

function LoginPage() {
  let navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passcode, setPasscode] = useState("");
  const  {setLoginStatus} = useAuth();
  const {setLoggedUserData} = useAuth()
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/users/" + phoneNumber)
      .then((response) => {
        if (response.data.password == passcode) {
          setLoginStatus(true);
          console.log("Logging in...");
          navigate("/");
          setLoggedUserData(response.data)
          console.log(response.data)
        } else {
          console.log("wrong passcode");
          setLoginStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#FFFDF7] ">
      <Navbar />
      <form
        onSubmit={handleLogin}
        className="w-[60vw] h-[70vh] flex flex-col m-auto items-center justify-between "
      >
        <h2 className="font-bold text-xl ">LOGIN</h2>
        <div className="flex items-center">
          <EmailOutlined
            className="bg-[#9181F41A]"
            style={{
              height: "60px",
              paddingLeft: "10px",
              width: "40px",
              borderRadius: "10px 0px 0px 10px",
            }}
          />
          <input
            style={{ borderRadius: "0px 10px 10px 0px" }}
            className=" h-[60px] w-[40vw] border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <HttpsIcon
            className="bg-[#9181F41A]"
            style={{
              height: "60px",
              paddingLeft: "10px",
              width: "40px",
              borderRadius: "10px 0px 0px 10px",
            }}
          />
          <input
            style={{ borderRadius: "0px 10px 10px 0px" }}
            className=" h-[60px] w-[40vw] border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
            type="password"
            placeholder="Password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
        </div>
        <button className="w-[18vw] py-5 bg-red-500 rounded-xl text-white text-sm px-1 lg:text-xl">
          Login Now
        </button>
        <p className="text-[#DE1D1D] font-bold text-lg">Forget Password ?</p>
        <Link to="/signup">
          <p className="font-bold text-xl">Click here to Register</p>
        </Link>
        <Link to="/admin/adminLogin">
          <p className="font-bold text-sm">Admin <span className="text-red-500" >login</span> </p>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
