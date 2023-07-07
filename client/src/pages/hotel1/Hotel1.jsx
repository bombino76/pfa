import "./Hotel1.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { SearchContextTwo } from "../../context/SearchContextTwo";
import { SearchContextThree } from "../../context/SearchContextThree";
import {Car} from "../../components/car/Car"
const Hotel1 = () => {



  
  

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

 
  
  const {name,seats,luxe} = useContext(SearchContextTwo)
  //const {dataCar,loadingCar, errorCar} = useFetch(`/cars?name=${name}`)  
  const {wifi,babySeats,extraBaggage,elseExtra}=  useContext(SearchContextThree)

  const {source, destination, dates, options}=  useContext(SearchContext)
  const {data, loading, error} = useFetch(`/targets/one?source=${source}&destination=${destination}`)
  //console.log(data1)
  //const {data, loading, error} = useFetch(`/targets/find/64a201ad413f7980359a6132`)
  
 // console.log(wifi,babySeats,extraBaggage,elseExtra)
 // console.log(typeof source)
 console.log(name,seats,luxe)
//const car = name
 
  const startDate = dates[0].startDate.toLocaleDateString('en-GB')


  const handleClick = ()=>{
    if(user){

    }
      else{
        navigate("/login")
      
    }

  }



  return (
    <div >
      <Navbar />
      <Header type="list" />
       <div className="container">
        <Car carName={name}/>

        <div className="searchdata">
          <img
            src= {data.img}
            alt=""
            className="siImg"
          />
        <div className="siDesc">
          <h1 className="siTitle">{data.source} to {data.destination}</h1>
        
          <span className="siTaxiOp"> {data.distance} km</span>
          <span className="siSubtitle">
          
          </span>
          <span className="siSubtitle">
            Date : {startDate}
          </span>
          <span className="siSubtitle">
            Adult : {options.adult}
          </span>
          <span className="siSubtitle">
            Childern : {options.children}
          </span>
          <span className="siSubtitle">
          <span className="siPrice">{data.price} MAD</span>
        
          </span>


        </div>
      </div> 
      <div>
        Extras
        <ul>
          <li>
            <label >Wifi</label>
            <input type="checkbox" />
          </li>
          <li>
            <label >Babay Seats</label>
            <input type="checkbox" />
          </li>
          <li>
            <label >Extra Baggage</label>
            <input type="checkbox" />
          </li>
          
        </ul>
      </div>
    </div> 
  </div>



    
  );
};

export default Hotel1;
