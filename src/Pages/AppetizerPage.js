import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import AppetizerCont from "../Components/SubComponentContainer/AppetizerCont";
import { useAuth } from "../AuthContext/AuthContext";
import { useEffect } from "react";
import RecommendedCardCont from "../Components/SubComponentContainer/RecommendedCardCont";
import FoodCardMoreWid from "../Components/SubComponentContainer/FoodCardMoreWid";
function AppetizerPage() {
  const { searchItem } = useAuth();
  useEffect(() => {
    console.log("search item from home", searchItem);
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
          <AppetizerCont />
        )}
      </div>
          <RecommendedCardCont />
    </div>
  );
}

export default AppetizerPage;
