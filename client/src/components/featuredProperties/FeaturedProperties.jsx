import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch.js"


const FeaturedProperties = () => {
  const {data,loading,error} = useFetch("/targets/getFeautred?limit=4")

  return (
    <div className="fp">
      {loading ? "Loading" :<>
      {data.map(item=>(


<div className="fpItem" key={item._id}>
        <img
          src={item.img}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.source} To {item.destination}</span>
{/*         <span className="fpCity">{item.source}</span>
        <span className="fpCity">To</span>
        <span className="fpCity">{item.destination}</span> */}
        <span className="fpPrice">Starting from {item.price} DH </span>
        <div className="fpRating">
          <span></span>
          <button>{item.distance} km</button>
          
        </div>
      </div>
      
    ))}
      </>}
    </div>
  );
};

export default FeaturedProperties;
