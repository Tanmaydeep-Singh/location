import React, { useEffect, useRef, useState } from "react";
import '../App.css'

import '../assets/images/css/block.css'


function BlockPage() {
  const [long, setLong] = useState("");
  const [lati, setLati] = useState("");
  const [location,setLocation] = useState("You are in India.");



  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    setLong(crd.longitude.toFixed(2));
    setLati(crd.latitude.toFixed(2));

  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  

 const longitudeRange = () => {
    if( long <= 68.7 || long >= 97.25)
{
    console.log("Longitude changed lat")
    setLocation("You have moved outside India.");
}
  }

  const latitudeRange = () => {
    if( lati <= 8.40 || lati>=37.60 )
    {
    console.log("Latutude changed lon")
    setLocation("You have moved outside India.");
}
  }

  const change = () => {

        longitudeRange();
        latitudeRange();
  }




  return (
    <div className="block justify-center text-center text-xl m-20 ">
      <h1> You Current Location</h1>

      <div >
        <h3 onChange={ change}> longitute:{long} </h3>
        <h3 onChange={ change}> latitude:{lati} </h3>
      </div>

      <h2>{location}</h2>
    </div>
  );
}

export default BlockPage;
