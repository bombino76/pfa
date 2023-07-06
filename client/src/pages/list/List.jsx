import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation, useNavigation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch.js"
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const List = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [source, setSource] = useState(location.state.source);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const {data,loading,error,reFetch} = useFetch(`/targets?source=${source}&destination=${destination}`)
  const {dispatch} = useContext(SearchContext)
  const handleClick = ()=>{
    dispatch({type:"NEW_SEARCH", payload:{source, destination, dates, options}})

    navigate("/hotels", { state: { source,destination, dates, options } });
    //reFetch();
  }
  const handleChangeOne = (event) => {
    setSource(event.target.value)
  }
  const handleChangeTwo = (event) => {
    setDestination(event.target.value)
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
              <label>Source</label>
              <input onChange={handleChangeOne} placeholder={source} type="text" />
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input onChange={handleChangeTwo} placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">


                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>

              </div>
            </div>
            <button onClick={handleClick} >Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
            ))}
            
            </>}
            
           




          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
