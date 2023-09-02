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
import axios from "axios";
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
  var extraTotal = 0 
  if(wifi) extraTotal = extraTotal + 30
  if(babySeats) extraTotal = extraTotal + 40
  if(extraBaggage) extraTotal = extraTotal + 50
  var extraString =""
  if(wifi) extraString = extraString + "Wifi"
  if(babySeats) extraString = extraString + " BabySeats "
  if(extraBaggage) extraString = extraString + " ExtraBaggage "
  console.log(extraString)

const [message, setMessage] = useState(0);
const [clicked, setClicked] = useState(false);

const chooseMessage = (message) => {
  setMessage(message);
};
const nbrPass = options.adult + options.children
const total = message + extraTotal + data.price

const userLocal =  JSON.parse(localStorage.getItem("user"))

const post = {
          Car:name,
          nbrPassenger:nbrPass,
          total:total,
          state:"waiting",
    
          source:data.source,
          destination:data.destination,
          extra:extraString,
          firstName:userLocal.firstName,
          email:userLocal.email,
          phone:userLocal.phone

          //user: localStorage.getItem("user")
}

const handleBook = async() =>{
  if(user){
    try{
      const res = await axios.post(`/reservations/`,post)
  
      setClicked(true)
    }catch(err){}

  }
    else{
      navigate("/login")
    
  }
  
}
  const startDate = dates[0].startDate.toLocaleDateString('en-GB')





  return (
    <div >
      <Navbar />
      <Header type="list" />
      <h1 className="hotelTitle">Order Summary</h1>
       <div className="container">
       
        <Car carName={name}
             chooseMessage={chooseMessage} 
        />

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
      
      <div className="searchdata">
          <img
            src= "https://cdn01.alison-static.net/careers/career/chauffeur.jpg"
            alt=""
            className="siImg"
          />
      <div className="siDesc">
          <h1 className="siTitle">Extras</h1>
        

          <span className="siSubtitle">
            Wifi (30 MAD) : {wifi &&  <span>✓</span> }
          </span>
          <span className="siSubtitle">
          BabySeats (40 MAD) : {babySeats && <span>✓</span> }
          </span>
          <span className="siSubtitle">
          ExtraBaggage (50 MAD) : {extraBaggage && <span>✓</span> }
          </span>
          <span className="siSubtitle">
          <span className="siPrice">{extraTotal} MAD</span>
        
          </span>


        </div> 
        </div>
 
    </div>
    
        <div className="btnDiv">
          <button className="btn"  disabled={clicked} onClick={handleBook}>Book Now! {message + extraTotal + data.price} MAD</button>
          <button className="btn green" disabled={clicked} onClick={handleBook}>Pre Reservation! (pay 20%) {(message + extraTotal + data.price)/100*20} MAD</button>

         </div> 
         <div className="bookDiv">
         <span className="siTitle" style={{ visibility: clicked ? "visible" : "hidden" }}> Your Reservation is booked , You will recive an email soon</span>

         </div>


         
  </div>



    
  );
};

export default Hotel1;
