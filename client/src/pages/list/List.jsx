import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price 
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price 
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
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
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem 
           
              name ={"Moroccan pure sahara tour"}
              url={"https://media-cdn.tripadvisor.com/media/photo-s/1a/55/e2/37/caption.jpg"}
              source={"Casablanca"}
              destination={"Merzouga"}
              distance={"450km"}  />
            <SearchItem 
           
              name={"Sahara desert "}
              url={"https://desert-maroc.com/wordpress2012/wp-content/uploads/desert-merzouga-camp-e1613144211750.jpg"}
              source={"Rabat"}
              destination={"Merzouga"}
              distance={"430km"}

               /> 
            <SearchItem 
              
              name={"Magestic desert tour"}
              url={"https://happytrip.ma/wp-content/uploads/2021/03/Sahara-desert-merzouga-ouarzazate-toudgha-dades-happy-trip-scaled.jpg"}
              source={"Tanger"}
              destination={"Merzouga"}
               distance={"500km"}
            
                          
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
