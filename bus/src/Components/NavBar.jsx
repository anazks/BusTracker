
import logobuss from '../logobuss.png'
import './nav.css'
import Axios from '../Axios'
import React, { useEffect, useState ,useRef} from 'react'  
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SearchResult from './SearchResult';
import axios from 'axios';
function NavBar() {
        const [travel,settravel]=useState([])   
        const searchBusRef = useRef(null);
        const [bus,setbus] = useState([])
        const [show, setShow] = useState(false);
        const [fromValue, setFromValue] = useState('');
        const [toValue, setToValue] = useState('');

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        useEffect(() => {
                try {
                    Axios.get('/getRoute').then((response)=>{
                        if(response){
                          settravel(response.data)
                          console.log(travel,"from")
                        }
                    })
                } catch (error) {
                  console.log(error)
                }
              }, [])
              const handleSubmit = (event) =>{
                event.preventDefault(); 
                const busName = searchBusRef.current.value
                console.log(busName,"seraching")
                let data  = {
                        busName
                }
                Axios.post("/searchByBus",data).then((response)=>{
                               try {
                                        if(response){
                                                console.log(response)
                                                setShow(true);
                                                setbus(response.data[0])
                                                console.log(response.data[0],"","from bus")
                                        }else{
                                                console.log("no data")
                                        }
                               } catch (error) {
                                        console.log(error)
                               }
                })
              }

              const handleSearch = () => {
                // Do something with fromValue and toValue
                
                console.log('From:', fromValue);
                console.log('To:', toValue);
                let rootData = {
                        fromValue,
                        toValue
                }
                console.log(rootData)
                Axios.post("/getBusByRoot",rootData).then((response)=>{
                        console.log(response.data)
                        setShow(true);
                        setbus(response.data[0],"get bus by root")
                })
              };
  return (
    <div className='NavBar'>
            <div className='Logo'>
                    <img src={logobuss} alt="" />
            </div>
            <div className='search'>
                <form onSubmit={handleSubmit} method="post">
                    <input type="text" placeholder='Search By Bus' ref={searchBusRef} />
                    <button className='searchBtn'>Search </button>
                </form>
            </div>

            <div className='Destination'>
                                <select
                                        name=""
                                        id=""
                                        value={fromValue}
                                        onChange={(e) => setFromValue(e.target.value)}
                                >
                                        {travel.map((obj, index) => (
                                        <option key={index} value={obj.from}>
                                        {obj.from}
                                        </option>
                                        ))}
                                </select>

                                <select
                                        name=""
                                        id=""
                                        style={{ marginLeft: '10px' }}
                                        value={toValue}
                                        onChange={(e) => setToValue(e.target.value)}
                                >
                                        {travel.map((obj, index) => (
                                        <option key={index} value={obj.to}>
                                        {obj.to}
                                        </option>
                                        ))}
                                </select>

      <button style={{ marginLeft: '10px' }} onClick={handleSearch} className='plaseSearch'>
        Search
      </button>
    </div>


 <Modal show={show} onHide={handleClose}
                dialogClassName="modal-120w"              
 >
  <SearchResult BusData = {bus}/>

</Modal>
    </div>
  )
}

export default NavBar