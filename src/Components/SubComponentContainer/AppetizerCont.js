import React from "react";
import FoodCardMoreWid from "./FoodCardMoreWid";
import RecommendedCardCont from "./RecommendedCardCont";
import data from "../../data.json"
function AppetizerCont() {
  return (
    <div className=" w-[80vw] m-auto ">
      <h2 className="text-2xl my-7 font-bold ">Top Categories</h2>
      <h2 className="text-2xl my-7 font-bold ">Appetizer</h2>
      <div className="flex flex-wrap gap-y-12  items-center justify-between">
        {
          data.Appetizer.map((data)=>(
            <FoodCardMoreWid key={data.id} img={data.image} name={data.name} price={data.price} description={data.description}/>
          ))
        }
    
        <RecommendedCardCont />
      </div>
    </div>
  );
}

export default AppetizerCont;
