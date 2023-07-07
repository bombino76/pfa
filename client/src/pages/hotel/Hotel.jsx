import "./hotel.css";
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
import { SearchContextThree } from "../../context/SearchContextThree.js";


const Hotel = () => {
  const [wifi,setWifi] = useState(false)
  const [babySeats,setBabySeats] = useState(false)
  const [extraBaggage,setExtraBaggage] = useState(false)
  const [elseExtra,setElseExtra] =useState('')
  const location = useLocation()
  
  const id = location.pathname.split("/")[2]
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const {data, loading, error} = useFetch(`/targets/find/${id}`)

  const {source, destination, dates, options}=  useContext(SearchContext)
  console.log(source, destination, dates, options)



  const {dispatch} = useContext(SearchContextThree)


  const handleClick = ()=>{
    if(user){
      dispatch({type:"NEW_SEARCH", payload:{wifi,babySeats,extraBaggage,elseExtra}})

      navigate("/cars", { state: { wifi,babySeats,extraBaggage,elseExtra } });
    }
      else{
        navigate("/login")
      
    }

  }

  const handleWifi = ()=>{
    setWifi(!wifi)
  }

  const handleBabySeats = ()=>{
    setBabySeats(!babySeats)
  }

  const handleExtraBaggage = ()=>{
    setExtraBaggage(!extraBaggage)
  }

  const handleElseExtra = (e)=>{
    setElseExtra(e.target.value)
    console.log(elseExtra)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
{ loading? "loading" : 
   (<div className="hotelContainer">
       
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">
            
            {data.source} To {data.destination}</h1>

          <span className="hotelDistance">
            Distance – {data.distance}km
          </span>


          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Would you like any extras?</h1>
              <div className="checkbox">
              <label>
        <input onChange={handleWifi} type="checkbox" />
          WIFI
      </label>
      <label>
        <input onChange={handleBabySeats} type="checkbox" />
          Baby Seats
      </label>
      <label>
        <input onChange={handleExtraBaggage} type="checkbox" />
          Extra baggage
      </label>
      <span className="hotelPriceHighlight">
      Something else? please specify it below          
          </span>
      
      <input onChange={handleElseExtra} className="inputBox" type="text" />
              </div>
            </div>
            <div className="hotelDetailsPrice">

              <h2>
                <b>{data.price} MAD</b>
              </h2>
              <button onClick={handleClick} >Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
    </div>
  );
};

export default Hotel;
