import { useState } from "react";
import { useEffect } from "react";
import Fooditem from "../Fooditem/Fooditem";

const FoodItems = () => {
    // const [foods, setFood] = useState([]);
    // useEffect(() => {
    //   fetch("Api.json")
    //     .then((res) => res.json())
    //     .then((data) => setFood(data));
    // }, []);
    // console.log(foods);
    return (
        <div>
        {/* <h1>food items: {foods.length}</h1>
        {foods.map((food) =>
        (<FoodItem key={food.id} food ={food}></FoodItem>))} */}
           
        </div>
    );
};

export default FoodItems;

 {/* <div className="grid grid-cols-10">
      <div className="grid-cols-3"></div>
      <div className="grid-cols-3"></div>
      <div className="grid-cols-4"></div>
      </div> */}