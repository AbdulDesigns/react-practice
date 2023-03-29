import React, { useState } from "react";
import "../basics/style.css";
import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

//unique category using set method
//you can convert object in to array using [object]
//use the spread operator to unpack the values
const uniqueList = [
  ...new Set(
    Menu.map((curEl) => {
      return curEl.category;
    })
  ),
  "all",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(Menu);
      return;
    }
    //updated list
    const updatedList = Menu.filter((cur) => {
      return cur.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar
        filterItem={filterItem}
        setMenuData={setMenuData}
        menuList={menuList}
      />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
