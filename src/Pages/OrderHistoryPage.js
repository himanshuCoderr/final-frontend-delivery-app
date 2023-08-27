import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import OrderHistoryComponent from "../Components/SubComponentContainer/OrderHistoryComponent";
function OrderHistoryPage() {
  const [historyItems, setOrderedItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/OrderHistory`)
      .then((res) => {
        setOrderedItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="w-[100vw] h-[200px] flex justify-center items-center ">
          <p className="font-bold text-xl">Order History</p>
        </div>
        <div className="w-[100vw] h-[50px] mb-10 bg-[#ccac4e] px-4 font-bold text-sm lg:text-lg flex items-center">
          <p className="w-[40%]">Order-id</p>
          <p className="w-[15%]">Date</p>
          <p className="w-[15%]">Items</p>
          <p className="w-[15%]">Amount</p>
          <p className="w-[15%]">Status</p>
        </div>
        {historyItems.map((item) => (
          <OrderHistoryComponent
            orderId={item.orderId}
            date={item.date}
            items={item.items}
            price={item.Amount}
            status={item.Status}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderHistoryPage;
