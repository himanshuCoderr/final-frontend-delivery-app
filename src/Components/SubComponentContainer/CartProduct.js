import React, { useEffect } from "react";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";
function CartProduct({ uniqueId, name, price, quantity, img }) {
  let [cartNum, setCartNum] = useState(quantity);
  const [newUpdate, setNewUpdate] = useState([]);
  const {setCartUpdate} = useAuth()
 const {cartUpdate} = useAuth()
  useEffect(() => {
    axios
      .patch(`http://localhost:8000/cart/${uniqueId}`,newUpdate)
      .then((res) => {
        console.log(res.data);
        setCartUpdate(!cartUpdate)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartNum]);


  function decrementCart() {
    if (cartNum == 0) {
      alert("cart is zero");
    } else {
      let newVal = cartNum - 1;
      setCartNum(newVal);
      let update = {
        name: name,
        price: price,
        quantity: newVal,
        img: img,
        uniqueId: uniqueId,
      };
      setNewUpdate(update);
    }
    console.log(cartNum);
  }

  function incrementCart() {
    console.log("increment");
    let newVal = cartNum + 1;
    setCartNum((prevCartNum) => {
      let update = {
        name: name,
        price: price,
        quantity: newVal,
        img: img,
        uniqueId: uniqueId,
      };
      console.log("new val is", newVal);
      setNewUpdate(update);
      return newVal;
    });
  }

  const handleDelete = (e) => {
    e.preventDefault();
      console.log(uniqueId);
      axios
        .delete(`http://localhost:8000/cart/${uniqueId}`)
        .then((response) =>{ 
          console.log(response.data)
          setCartUpdate(!cartUpdate)
        });
  };
  return (
    <div className="w-[80vw] h-[60px] bg-[#202844] m-auto my-2 rounded-lg text-white flex justify-around">
      <div className="flex flex-row items-center w-[30%] justify-between ">
        <p>{name}</p>
        <p>Rs {price}</p>
      </div>
      <div className="flex flex-row items-center w-[30%] justify-between ">
        <div className="flex items-center justify-between w-[50px] text-lg text-white font-semibold">
          <button onClick={decrementCart}>-</button>
          <p>{cartNum}</p>
          <button onClick={incrementCart}>+</button>
        </div>
        <DeleteOutlineIcon className="text-white" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CartProduct;

// axios
//     .patch(`http://localhost:8000/users/${loggedUserData.id}`, {
//       cart: (prevCart) => {
//         return prevCart.map((item) => {
//           if (item.uniqueId == newUpdate.uniqueId) {
//             return newUpdate;
//           } else {
//             return item;
//           }
//         });
//       },
//     })
//     .then((res) => console.log("data of cart is", res.data))
//     .catch((err) => console.log(err));

// async function updateCartItem(newQuantity) {
//   try {
//     const response = await axios.patch(
//       `http://localhost:8000/users/${loggedUserData.id}`,
//       {
//         cart: loggedUserData.cart.map((item) =>
//           item.uniqueId === uniqueId
//             ? { ...item, quantity: newQuantity }
//             : item
//         ),
//       }
//     )

// function decrementCart() {
//   if (cartNum === 0) {
//     alert("cart is zero");
//   } else {
//     let newVal = cartNum - 1;
//     setCartNum((prevCartNum) => {
//        update = {
//         name: name,
//         price: price,
//         quantity: newVal,
//         img: img,
//         uniqueId: uniqueId,
//       };
//       console.log("new update is ",update)
//       setNewUpdate(update);
//       return newVal;
//     });
//   }
// }

// function incrementCart() {
//   let newVal = cartNum + 1;
//   setCartNum(newVal);
//   console.log("new value of cart is ",newVal);
//   let update = {
//     name: name,
//     price: price,
//     quantity: newVal,
//     img: img,
//     uniqueId: uniqueId,
//   };
//   setNewUpdate(update);
// }

// useEffect(() => {
//   axios
//     .patch(`http://localhost:8000/users/${loggedUserData.id}`, {cart: (prevCart) => prevCart.map(item => (item.uniqueId === newUpdate.uniqueId ? newUpdate : item))})
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }, [cartNum]);
