import React, { useEffect, useState } from 'react'
import './bus.css'
import { FaBus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import Axios from '../Axios'

function BUsis(props) {
  
  const [bus,setBus]=useState([])
  const [location,setLocation] = useState([])
  if(props){
   
    // console.log(props.bus,"props")
    // setBus(props)
  }
  useEffect(() => {
    try {
        Axios.get('/getBus').then((response)=>{
            if(response){
              setBus(response.data)
              console.log(response.data)
            }
        })
        let latitude =  10.0080168;
        let longitude = 76.3289937;
        Axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=8cd8f366fda24ba2a495b8520900cc49`).then((response)=>{
              console.log(response.data.results[0].components.road)
              setLocation(response.data.results[0].components)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  return (
    <div className='cards'>
     
      {
        bus.map((obj)=>{
            return(
              <>
                <div className="cardss">
                     
                          <div className='bus_Name'>
                                  <h3>{obj.Boatname} <br />
                                  
                                  </h3> 
                                 
                          </div>
                          <div className='bus_data'>
                                <div className='topData'>
                                    <div className='timing'>
                                      <h5><IoIosTime />{obj.Time}</h5> 
                                    </div>
                                      <div className='Location'>
                                     <span><b>  Arraived at : <i>{location.road} <MdLocationOn /></i></b></span>
                                      </div>
                                      <div>
                                          <button className='notification'>Notify <MdNotificationsActive /></button>
                                      </div>
                                </div>
                                  <div className='stops'> <br />
                                 <span><b><i> {obj.from}</i></b></span>
                                        <div className='circle'><FaBus/></div>
                                        <FaLongArrowAltRight />
                                        <div className='circle'><FaBus/></div>
                                        <FaLongArrowAltRight />
                                        <div className='circle'><FaBus/></div>
                                        <FaLongArrowAltRight />
                                        <div className='circle'><FaBus/></div>
                                        <FaLongArrowAltRight />
                                        <div className='circle'><FaBus/>
                                           
                                        </div>  <br />  <span><b><i>{obj.to}</i></b></span>
                                  </div>
                          </div>
                          </div>    
              </>
            )
        })
      }
           
          
            
    </div>
  )
}

export default BUsis