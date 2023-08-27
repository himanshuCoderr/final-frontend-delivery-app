import React from "react";
import CategoryCard from "./CategoryCard";
import AppetizerImg from "../../images/TopCategoryImg/AppetizerImg.png";
import BreakFastImg from "../../images/TopCategoryImg/Breakfast.png";
import VegImg from "../../images/TopCategoryImg/VegImg.png";
import DessertImg from "../../images/TopCategoryImg/DesertImg.png";
import NonvegImg from "../../images/TopCategoryImg/NonVegImg.png";
import ChineeseImg from "../../images/TopCategoryImg/ChineeseImg.png";
import { Link } from "react-router-dom";

// const TopCategoryData = [
//   { id:1, categoryText:"Appetizer", categoryImg:AppetizerImg},
//   { id:2, categoryText:"BreakFast", categoryImg:Appetizer2Img},
//   { id:3, categoryText:"Veg", categoryImg:VegImg},
//   { id:4, categoryText:"Dessert", categoryImg:DessertImg},
//   { id:5, categoryText:"NonVeg", categoryImg:NonvegImg},
//   { id:6, categoryText:"Chineese", categoryImg:ChineeseImg}
// ];

function TopCategoryCont() {
  return (
    <div className="w-[80vw] m-auto">
      <h2 className="   text-2xl my-7">Top Categories</h2>
      <div className="flex w-[80vw] m-auto flex-wrap gap-y-12 items-center justify-evenly gap-x-10 ">
        <Link to="/appetizer">
          <CategoryCard CategoryText="Appetizer" CategoryImg={AppetizerImg} />
        </Link>
        <Link to="/breakfast">
          <CategoryCard
            CategoryText="Breakfast&Brunch"
            CategoryImg={BreakFastImg}
          />
        </Link>
        <Link to="/veg">
          <CategoryCard CategoryText="Veg" CategoryImg={VegImg} />
        </Link>
        <Link to="/desserts">
          <CategoryCard CategoryText="Deserts" CategoryImg={DessertImg} />
        </Link>
        <Link to="/nonveg">
          <CategoryCard CategoryText="Non Veg" CategoryImg={NonvegImg} />
        </Link>
        <Link to="/chineese">
          <CategoryCard CategoryText="Chineese" CategoryImg={ChineeseImg} />
        </Link>
      </div>
    </div>
  );
}

export default TopCategoryCont;
