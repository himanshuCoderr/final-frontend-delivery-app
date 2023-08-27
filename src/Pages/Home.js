import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import TopCategoryCont from "../Components/SubComponentContainer/TopCategoryCont";
import RecommendedCardCont from "../Components/SubComponentContainer/RecommendedCardCont";
import { useAuth } from "../AuthContext/AuthContext";
import FoodCardMoreWid from "../Components/SubComponentContainer/FoodCardMoreWid";
function Home() {
  const { searchItem } = useAuth();
 
  useEffect(() => {
    console.log("search item from home", searchItem);
  }, [searchItem]);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="w-[80vw] m-auto mt-5" >
        {searchItem.length > 0 ? (
          <FoodCardMoreWid
            img={searchItem[0].image}
            name={searchItem[0].name}
            price={searchItem[0].price}
            description={searchItem[0].description}
          />
        ) : (
          <TopCategoryCont />
        )}
      </div>

      <RecommendedCardCont />
    </div>
  );
}

export default Home;
