import React, { useEffect } from "react";
// import FriedRice from "../../images/RecommendedImg/FiredRice.png";
import { useState } from "react";
import CartProduct from "./CartProduct";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";
function FoodCardMoreWid({ img, name, price, description }) {
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
      alert("login to continue");
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
        alert("cart is zero");
      } else {
        const newCartData = {
          img,
          name,
          price,
          description,
          quantity: cartNum,
        };
        // setCartData([...cartData,newCartData])
        const cartArrDataSample = [...arrCartData, newCartData];
        console.log("data of cart", { img, name, price, cartNum });
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
  useEffect(() => {
    console.log("updated collection of cart data is ", cartData);
  }, [cartData]);

  return (
    <div className="h-[350px] w-[300px] my-5" >
      <div className=" bg-[#202844] h-[350px] w-[300px] rounded-2xl flex items-center flex-col ">
        <img src={img} alt="" className="w-[200px]  pt-4" />
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
    // <div className="w-fit" style={{width:""}} >
    //   <div className=" bg-[#202844] h-[350px] w-[500px] rounded-2xl flex items-center flex-col ">
    //     <img
    //       src={img}
    //       alt=""
    //       className="w-[200px] h-[200px] rounded-3xl mt-2 pt-4"
    //     />
    //     <p className=" text-[#FBF0D37A] text-lg font-bold">{name}</p>
    //     <p className="bg-[#B1F2A6] px-5 py-1 rounded-2xl font-bold">
    //       Rs.{price}
    //     </p>
    //     <p className="w-[80%] text-[#FBF0D37A]">
    //       Our fried rice is made from the finest ingredients and veggie...{" "}
    //     </p>
    //   </div>

    //   <div className="bg-[#BC3636] flex w-[200px] m-auto my-5 justify-around rounded-2xl">
    //     {" "}
    //     <button
    //       className="bg-[#D0F5D4] my-2  px-3 py-[2px] rounded-3xl text-sm font-semibold "
    //       onClick={addToCart}
    //     >
    //       Add to Cart
    //     </button>
    //     <div className="flex items-center justify-between w-[50px] text-lg text-white font-semibold">
    //       <button onClick={decrementCart}>-</button>
    //       <p>{cartNum}</p>
    //       <button onClick={incrementCart}>+</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default FoodCardMoreWid;
