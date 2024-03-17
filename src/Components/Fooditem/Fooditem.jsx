import PropTypes from 'prop-types';
import Healthy from '../../assets/Image/Healthy.jpg';
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";


const Fooditem = ({FoodName, handleToCook, currentCook}) => {
// console.log(handleToCook)

    return (
        <div>
        <div className='border-2 border-gray-200 rounded-xl'>
            <img
              src={FoodName.recipe_image}
              className="w-96 h-[260px] p-6 rounded-[10%]"
            />
            <h1 className="mx-4 text-2xl font-bold">{FoodName.recipe_name}</h1>
            <p className="mx-4">{FoodName.short_description}</p>
            <hr className="my-2" />
            <div className="mx-4">
              <h1><span className='text-xl font-bold'>ingredient :{FoodName.ingredients.length}</span>
              {FoodName.ingredients.map((has, inx)=> <ul key={inx} className='list-disc ml-10'><li>{has}</li></ul>) 
      }</h1>
              <hr className="my-2" />
            </div>
            <div className="flex justify-between items-center mx-4">
              <div className="flex justify-between items-center">
                
                <CiClock2 />
                
                <h1 className="ml-4">{ FoodName.preparing_time} min</h1>
              </div>

              <div className="flex justify-between items-center">
                <RiFireLine />
                
                <h1 className="ml-4">{FoodName.calories} calories</h1>
              </div>
            </div>
            {/* <button onClick={()=>setCount(count+1)} onClick={(e) =>handleToCook(FoodName)} className="bg-green-400 p-4 py-2 font-bold rounded-full my-3 mx-4"> */}
            <button onClick={() => {
                    // setCount(count+1);
                    handleToCook(FoodName);
                    
                  }}
            className="bg-green-400 p-4 py-2 font-bold rounded-full my-3 mx-4">
              Want to Cook
            </button>
          </div>
        </div>
    );
};

export default Fooditem;