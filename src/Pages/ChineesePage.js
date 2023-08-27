import React from "react";
import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import { useAuth } from "../AuthContext/AuthContext";
import FoodCardMoreWid from "../Components/SubComponentContainer/FoodCardMoreWid";
import { useEffect } from "react";
import ChineeseCont from "../Components/SubComponentContainer/ChineeseCont";
import RecommendedCardCont from "../Components/SubComponentContainer/RecommendedCardCont";
function ChineesePage() {
  const { searchItem } = useAuth();

  useEffect(() => {
    console.log("search item from Breakfast", searchItem);
  }, [searchItem]);
  return (
    <div>
      <Navbar />
      <SearchBar />

      <div className="w-[80vw] m-auto mt-5">
        {searchItem.length > 0 ? (
          <FoodCardMoreWid
            img={searchItem[0].image}
            name={searchItem[0].name}
            price={searchItem[0].price}
            description={searchItem[0].description}
          />
        ) : (
          <ChineeseCont />
        )}
      </div>
      <RecommendedCardCont />
    </div>
  );
}

export default ChineesePage;
