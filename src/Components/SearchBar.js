import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";
function SearchBar() {
  const [search, setSearch] = useState("");
  const [gotItems, setGotItems] = useState([]);
  const {setSearchItem} = useAuth()
  const {searchItem} = useAuth()
  useEffect(()=>{
    setSearchItem(gotItems)
  },[gotItems])
  function getSearchItem() {

      axios
        .get(`http://localhost:8000/foods`, {
          params: {
            name: search,
          },
        })
        .then((res) => {
          console.log(`Search items are`, res.data);
          setGotItems(res.data);
          console.log("got items are",res.data)
        })
        .catch((err) => console.log(err));
  }
  return (
    <div className="lg:w-[80vw] w-[80vw] h-[60px] m-auto items-center flex  ">
      <div className="h-full flex items-center ">
        <SearchIcon
          className="bg-[#9181F41A]"
          style={{
            height: "60px",
            paddingLeft: "10px",
            width: "40px",
            borderRadius: "10px 0px 0px 10px",
          }}
        />
        <input
          style={{ borderRadius: "0px 10px 10px 0px" }}
          className="h-full lg:w-[70vw] w-[50vw]  border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
          type="text"
          placeholder="Search food"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <button
        className="lg:w-[10vw] w-[20vw]  h-full ml-2 rounded-3xl bg-[#FF0000C7] sm:text-sm text-white"
        onClick={getSearchItem}
      >
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
