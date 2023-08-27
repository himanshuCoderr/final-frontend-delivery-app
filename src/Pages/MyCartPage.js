import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CartProduct from "../Components/SubComponentContainer/CartProduct";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";
function MyCartPage() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { loggedUserData } = useAuth();
  const { loginStatus } = useAuth();
  console.log(loggedUserData);
  const {cartUpdate} = useAuth()

  useEffect(() => {
    setTotalAmount(
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cart]);

  useEffect(()=>{
    axios
    .get(`http://localhost:8000/cart`)
    .then((response) => {
      setCart(response.data);
    })
    .catch((err) => console.log(err));
  },[cartUpdate])

  return (
    <div>
      <Navbar />
      <div>
        <div className="w-[40vw] m-auto">
          <p className="mb-2">Estimated time</p>
          <p className=" h-[60px] bg-[#DFE3E8] rounded-xl flex items-center pl-5 ">
            Delivery in <span className="ml-5 font-semibold">25-30 mins </span>
          </p>
          <p className="text-center my-3">item(s) added</p>
        </div>
        {loginStatus ? (
          cart.map((data) => (
            <CartProduct
              uniqueId={data.id}
              key={data.id}
              name={data.name}
              price={data.price}
              quantity={data.quantity}
           
            />
          ))
        ) : (
          <p className="text-center">Login to show Cart</p>
        )}

        <div className="flex w-[80vw] m-auto justify-between my-10">
          <div className="w-[35vw] h-[300px] bg-slate-200">
            <p className="text-center my-5 font-bold  text-xl">user info</p>
            <div className=" bg-white h-[200px] w-[90%] overflow-scroll text-sm m-auto leading-10 pl-8 font-semibold">
              <p>Name : {loggedUserData.name}</p>
              <p>Address: {loggedUserData.address} {loggedUserData.city} {loggedUserData.state} {loggedUserData.pincode}</p>
              <p>Contact:{loggedUserData.contact}</p>
            </div>
          </div>
          <div className="w-[35vw] h-[300px] bg-slate-200">
            <p className="text-center my-5 font-bold text-sm lg:text-xl">Bill summary</p> 
            <div className="bg-white h-[200px] overflow-scroll w-[90%] m-auto leading-10 pl-8 font-semibold">
              <p>Total items : {cart.length} </p>
              <p>Total Amount: Rs.{totalAmount}/-</p>
              <button className="w-[90%] text-right">
                {" "}
                <span className="bg-[#E11A1A] lg:px-12 lg:py-2 py-1 px-3 text-white rounded-2xl">
                  Pay
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCartPage;
