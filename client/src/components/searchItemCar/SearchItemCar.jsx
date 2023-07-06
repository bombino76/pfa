import { Link } from "react-router-dom";
import "./searchItemCar.css";

const SearchItem = ({item}) => {
  
  return (
    <div className="searchItem">
      <img
        src= {item.imagePaths}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
       
        <span className="siTaxiOp"> {item.Modele}</span>
        <span className="siSubtitle">
        
        </span>
        <span className="siSubtitle">
          Number of Seats : {item.nbrPlaces}
        </span>
        <span className="siSubtitle">
      
        </span>

        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span> </span>
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{item.price} MAD</span>
          <span className="siTaxOp">Includes taxes and fees</span>
         
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Book This Car</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
