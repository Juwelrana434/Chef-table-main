import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import OurRecipe from "./Components/OurRecipe/OurRecipe";
import FoodItems from "./Components/FoodItems/FoodItems";
import Fooditem from "./Components/Fooditem/Fooditem";
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";

function App() {
  const [foods, setFood] = useState([]);
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [count, setCount] = useState(0);
  const [cookingCount, setCookingCount] = useState(0);
  const [calories, setCalories] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("Api.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  // console.log(foods);
  const handleToCook = (F) => {
    // console.log(F);
    let isExist = cook.find((food) => food.recipe_id == F.recipe_id);
    // console.log(isExist);
    if (!isExist) {
      setCook([...cook, F]);
      const newCount = count + 1; //for counting want to cook item
      setCount(newCount);
    } else {
      alert("food is already cook");
      isExist = false;
    }
  };
  // console.log(cook);
  // console.log(count);

  const currentCook = (c) => {
    const isExist = [...cooking, c];
    setCooking([...cooking, c]);
    const newCooking = cookingCount + 1;
    setCookingCount(newCooking);
    // const newCalories = calories + <h1>{FoodName.calories}</h1>
    // setCalories(newCalories);
    // console.log(isExist)
    // console.log(c);
  };
  // console.log(cooking);
  // const Count = (c) => {

  // }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <FoodItems></FoodItems>
      {/* <FoodItem></FoodItem> */}
      <div className="Main-container flex lg:flex-row flex-col lg:m-20">
        <div className="Food-item grid lg:grid-cols-2 gap-4 grid-cols-1 lg:w-[60%]">
          {foods.map((food) => (
            <Fooditem
              FoodName={food}
              handleToCook={handleToCook}
              currentCook={currentCook}
            ></Fooditem>
          ))}
        </div>
        <div className="want-to-cook lg:w-[40%]">
          <h1 className="text-center my-2 text-xl font-bold">
            Want to Cook :<span>{count}</span>
          </h1>
          <hr />
          <div className="flex justify-around my-2 mr-10 font-semibold text-xl">
            <h1>Name</h1>
            <h1>Time</h1>
            <h1>Calories</h1>
          </div>
          <div className="">
            {cook.map((item) => (
              <div
                key={item.recipe_id}
                className="flex justify-evenly items-center bg-gray-100 my-4 p-3" id="remove-recipe"
              >
                <h1>{item.recipe_name} </h1>
                <h1>{item.preparing_time} minutes</h1>
                <h1>{item.calories} calories</h1>
                <button
                  onClick={() => {
                    currentCook(item);
                    setCookingCount(cookingCount + 1);
                    setCount(count-1);
                    
                  }}
                  className="bg-green-400 p-2 font-bold rounded-full"
                >
                  Preparing
                </button>
              </div>
            ))}
          </div>
          <h1 className="text-center my-4 text-xl font-bold">
            Currently Cooking : <span>{cookingCount}</span>
          </h1>
          <hr />
          <div className="flex justify-around my-2 text-xl font-semibold">
            <h1>Name</h1>
            <h1>Time</h1>
            <h1>Calories</h1>
          </div>
          <div className="">
            {cooking.map((items) => (
              <div className="flex justify-evenly items-center bg-gray-100 my-4 p-3 ">
                <h1>{items.recipe_name}</h1>
                <h1>{items.preparing_time} minutes</h1>
                <h1>{items.calories} calories</h1>
              </div>
              
            ))}
          </div>
          <h1 className="text-center">Total calories{calories}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
