import React from "react";
import FriedRice from "../../images/RecommendedImg/FiredRice.png";
import { useState } from "react";
import CartProduct from "./CartProduct";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
function RecommendedCard({ img, name, price, description }) {
  const [cartNum, setCartNum] = useState(0);
  const [cartData, setCartData] = useState([]);
  const { loginStatus } = useAuth();

  const arrCartData = [];
  let addedTocart = 0;
  function incrementCart() {
    if (loginStatus) {
      let newVal = cartNum + 1;
      setCartNum(newVal);
      console.log(cartNum + 1);
    } else {
      alert("Login to continue");
    }
  }
  function decrementCart() {
    if (loginStatus) {
      if (cartNum == 0) {
        alert("cart is zero");
      } else {
        let newVal = cartNum - 1;
        setCartNum(newVal);
      }
      console.log(cartNum);
    } else {
      alert("login to continue");
    }
  }

  function addToCart() {
    if (loginStatus) {
      addedTocart = cartNum;
      console.log("new val of Cart", addedTocart);
      if (cartNum == 0) {
        alert("cart is zero ");
      } else {
        const newCartData = {
          img,
          name,
          price,
          description,
          quantity: cartNum,
        };
        const cartArrDataSample = [...arrCartData, newCartData];
        console.log("data of cart ", { img, name, price, cartNum });
        axios
          .post("http://localhost:8000/cart", newCartData)
          .then((response) => {
            console.log("Cart Data added to json server is ", response.data);
          })
          .catch((err) => {
            console.log("Cant push data ", err);
          });
        setCartNum(0);
      }
    } else {
      alert("login to continue");
    }
  }
  return (
    <div>
      <div className=" bg-[#202844] h-[350px] w-[300px] rounded-2xl flex items-center flex-col ">
        <img src={img} alt="" className="w-[80%]  pt-4" />
        <p className=" text-[#FBF0D37A] text-lg font-bold">{name}</p>
        <p className="bg-[#B1F2A6] px-5 py-1 rounded-2xl font-bold">
          Rs. {price}
        </p>
        <p className="w-[80%] text-[#FBF0D37A]"> {description} </p>
      </div>

      <div className="bg-[#BC3636] flex w-[200px] m-auto my-5 justify-around rounded-2xl">
        {" "}
        <button
          className="bg-[#D0F5D4] my-2  px-3 py-[2px] rounded-3xl text-sm font-semibold "
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <div className="flex items-center justify-between w-[50px] text-lg text-white font-semibold">
          <button onClick={decrementCart}>-</button>
          <p>{cartNum}</p>
          <button onClick={incrementCart}>+</button>
        </div>
      </div>
    </div>
  );
}

export default RecommendedCard;
