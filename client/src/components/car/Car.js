import React from 'react'
import useFetch from "../../hooks/useFetch"
import "./searchItemCar.css"

export const Car = ({carName}) => {
    const {data,loadingCar, errorCar} = useFetch(`/cars/find/one?name=${carName}`)  
    console.log(carName+" in car")
    console.log(data)
  return (
    <div className="searchdata">
    <img
      src= {data.imagePaths}
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">{data.name}</h1>
     
      <span className="siTaxiOp"> {data.Modele}</span>
      <span className="siSubtitle">
      
      </span>
      <span className="siSubtitle">
        Number of Seats : {data.nbrPlaces}
      </span>
      <span className="siSubtitle">
      <span className="siPrice">{data.price} MAD</span>
    
      </span>


    </div>

  </div>
  )
}
