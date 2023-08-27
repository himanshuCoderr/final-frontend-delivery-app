import React from "react";
import Logo from "../../src/images/logo.png";
import axios from "axios";
// import { CheckBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
function SignUpPage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState();
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMeChecked, setRememberMeChecked] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [formData, setFormData] = useState({});

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const SignUpData = {
        name,
        gender,
        contact,
        date,
        state,
        address,
        city,
        pincode,
        password,
        confirmPassword,
        rememberMeChecked,
        agreeCheck,
        id: contact,
      };
      axios
        .post("http://localhost:8000/users", SignUpData)
        .then((response) => {
          setFormData({});
          console.log("User registered successfully:", response.data);
          setName("");
          setGender("");
          setContact("");
          setDate("");
          setState("");
          setAddress("");
          setCity("");
          setPincode("");
          setPassword("");
          setConfirmPassword("");
          setRememberMeChecked(false);
          setAgreeCheck(false);
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
    } else {
      alert("password does not match");
    }
    console.log("The user data is ", formData);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#FFFDF7] ">
      <nav className="flex items-center m-2 ">
        <Link to="/">
          <img src={Logo} alt="" className="w-12 rounded-full" />
        </Link>
        <h1 className="text-xl ml-2 font-semibold">YUMMIES DELIVERY APP</h1>
      </nav>
      <form
        className="w-[80vw] m-auto flex  flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-3xl">Create account</h2>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <label className="font-bold mb-2" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className=" bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold mb-2" htmlFor="Gender">
              Gender
            </label>
            <input
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              type="text"
              id="Gender"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <label className="font-bold mb-2">Phone number</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              type="text"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold mb-2">Date Of Birth</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold mb-2">State</label>
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <label className="font-bold mb-2">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold mb-2">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold mb-2">Pincode</label>
            <input
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
              type="number"
              className="bg-slate-500  w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2 "
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col ">
            <label className="font-bold mb-2">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
          <div className="flex flex-col ml-8 ">
            <label className="font-bold mb-2">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              className="bg-slate-500 w-[25vw] h-[45px] rounded-lg text-white font-semibold text-lg pl-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center  ">
            <input
              checked={rememberMeChecked}
              onChange={() => setRememberMeChecked(!rememberMeChecked)}
              type="checkbox"
            />
            <label className="font-bold ml-1">Remember me</label>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              checked={agreeCheck}
              onChange={() => setAgreeCheck(!agreeCheck)}
              required
            />
            <label className="font-bold ml-1 ">
              I agree to all the Terms and Privacy policy
            </label>
          </div>
        </div>
        <div className="w-[20vw] m-auto flex items-center flex-col">
          <button
            type="submit"
            className="w-[20vw] py-4 bg-red-500 rounded-xl m-auto text-white text-xl"
          >
            Create Account
          </button>
          <p className="text-sm pt-1">
            {" "}
            Already have an account? <Link to="/login"> Log In </Link>
          </p>
        </div>
      </form>
      <a href="https://play.google.com/store/apps/details?id=com.rovio.baba">
        go
      </a>
    </div>
  );
}

export default SignUpPage;
