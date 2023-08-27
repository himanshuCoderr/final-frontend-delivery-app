import React from "react";

function OrderHistoryComponent({orderId,date,items,price,status}) {
  return (
    <div>
      <div className="w-[100vw] h-[50px] my-2 bg-blue-300 px-4 font-bold text-sm lg:text-lg flex items-center">
        <p className="w-[40%]">{orderId}</p>
        <p className="w-[15%]">{date}</p>
        <p className="w-[15%]">{items}</p>
        <p className="w-[15%]">{price}</p>
        <p className="w-[15%]">{status}</p>
      </div>
    </div>
  );
}

export default OrderHistoryComponent;
