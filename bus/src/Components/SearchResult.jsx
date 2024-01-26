
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";

import Axios from '../Axios'
import './searchBUs.css'
function SearchResult(props) {
  const [ResultBus,setResultBus]=useState([])
  const [location,setLocation] = useState([])
  useEffect(() => {
    if (props.BusData) {
      setResultBus(props.BusData);
      console.log(ResultBus,"Result------------")
    }else{
      console.log(ResultBus,"Result------------")
    }
    try {
      let latitude =  10.0080168;
      let longitude = 76.3289937;
      Axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=8cd8f366fda24ba2a495b8520900cc49`).then((response)=>{
            console.log(response.data.results[0].components.road)
            setLocation(response.data.results[0].components)
      })
  } catch (error) {
    console.log(error)
  }
   
  }, [props.BusData]);
 
  return (
    <div>
          <div className='cardes'>
                <div className="name">
                      <span>{ResultBus.Boatname}</span> <br /> <br /> <br />
                    <p>{ResultBus.Time}</p>  <IoIosTime />
                </div>
                <div className="contents">
                        <div className='root'>
                        <div>
                        <span>{ResultBus.from}</span>
                        </div>
                        to
                           <div>
                           <span>{ResultBus.to}</span>
                           </div>
                           <div>
                              current Location <br />
                              <MdLocationOn />  {location.road}
                           </div>
                        </div>   
                </div>
          </div>
    </div>
  )
}

export default SearchResult