import New from '../../assets/Image/New.jpeg';

const Banner = () => {
    return (
        <div className='mx-10'>
            <div className="hero min-h-screen">
            <img src={New} className='w-[90%] h-[540px]'/>
  {/* <div className="hero-overlay bg-opacity-60"></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 lg:text-5xl font-bold text-[#1e06f5] text-xl">Discover an exception cooking class <br />tailored for you</h1>
      <p className="mb-5 text-[#1923e6]">Learn and Master Basic Tasty Techniques ,Flavorful Fusion,Culinary Connoisseurs, Database Spice and Slice,Foodie Adventures Savory Secrets, <br /> Taste Buds Workshop and solve 500+ cooking Problems to become an exceptionally world-class Cooking Master   </p>
      <button className="btn bg-[#179127] rounded-full mr-4">Explore Now</button>
      <button className="btn btn-outline ml-4 rounded-full te">Our Feedback</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;