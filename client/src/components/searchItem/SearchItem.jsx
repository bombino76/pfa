import "./searchItem.css";

const SearchItem = ({url,name,distance,source,destination}) => {
  console.log()
  return (
    <div className="searchItem">
      <img
        src= {url}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">Extras Available</span>
        <span className="siSubtitle">
          {source}
        </span>
        <span className="siSubtitle">
          To
        </span>
        <span className="siSubtitle">
        {destination}
        </span>

        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
