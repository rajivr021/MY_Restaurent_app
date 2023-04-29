import React, { useState } from "react";
import "./Restaurant.css";
import Menu from "./menuApi"
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const [MenuData,SetMenuData]=useState(Menu)
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElement)=>{
      return curElement.category===category
    })
    SetMenuData(updatedList)
  }

 
  return (
    <>
    <nav className="navbar">
    <div className="btn-group">
      <button className="btn-group__item"onClick={()=>filterItem("breakfast")}>BreakFast</button>
      <button className="btn-group__item"onClick={()=>filterItem("lunch")}>Lunch</button>
      <button className="btn-group__item"onClick={()=>filterItem("evening")}>Evening</button>
      <button className="btn-group__item"onClick={()=>filterItem("dinner")}>Dinner</button>
      <button className="btn-group__item"onClick={()=>SetMenuData(Menu)}>All</button>
    </div>
   </nav>
    <MenuCard MenuData={MenuData}/>
    </>
  );
};

export default Restaurant;
