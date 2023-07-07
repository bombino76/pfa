import "./listCar.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";

import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

import SearchItemCar from "../../components/searchItemCar/SearchItemCar";
import useFetch from "../../hooks/useFetch.js"
import { SearchContextTwo } from "../../context/SearchContextTwo";
import { SearchContextThree } from "../../context/SearchContextThree";


const ListCar = () => {
  const {source, destination, dates, options}=  useContext(SearchContext)
  const {wifi,babySeats,extraBaggage,elseExtra}=  useContext(SearchContextThree)

  console.log(wifi,babySeats,extraBaggage,elseExtra)
  console.log(source, destination, dates, options)
  const navigate = useNavigate()

  const location = useLocation();


  const [name, setName] = useState('');
  const [luxe,setLuxe] = useState(false);
  const [seats,setSeats] = useState(5);

  
  
  const handleName = (e)=>{
    setName(e.target.value)
    console.log(name)
    }
  const handleLuxe = ()=>{
    setLuxe(!luxe)
    console.log(luxe)
  }
  const handleSeats = (e)=>{
    setSeats(e.target.value)
    console.log(seats)
  }
  //const [options, setOptions] = useState(location.state.options);

  const {data,loading,error,reFetch} = useFetch(`/cars?name=${name}&nbrPlaces=${seats}&luxe=${luxe}`)
  const {dispatch} = useContext(SearchContextTwo)
  const handleClick = ()=>{
    dispatch({type:"NEW_SEARCH", payload:{name,seats,luxe}})

    navigate("/cars", { state: { name,seats,luxe } });
  }

  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Name</label>
              <input onChange={handleName} placeholder="Car name and model" type="text" />
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">


                <div className="lsOptionItem">
                  Luxe
                  <input onChange={handleLuxe} type="checkbox" 
                  value="Luxe" name="luxe" /> 

                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Seats</span>
                  <select onChange={handleSeats} className="lsOptionInput">
                    <option value="5">5</option>
                    <option value="7">7</option>

                  </select>
{/*                   <input
                    type="number"
                    min={1}
                    max={7}
                    className="lsOptionInput"
                    placeholder="Seats"
                  /> */}
                </div>

              </div>
            </div>
            <button onClick={handleClick} >Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(
              <SearchItemCar item={item} key={item._id}/>
            ))}
            
            </>}
            
           




          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCar;
