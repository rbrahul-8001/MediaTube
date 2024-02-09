import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import  Videos  from "./Videos";

const Searchfeed = () => {
  const[videos,setvideos]=useState(null);
  const { searchterm } = useParams();
  console.log(searchterm);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchterm}`)
      .then((data) => setvideos(data.items))
  }, [searchterm]);
  return (
    <div className='bg-black mt-[110px] md:mt-[60px] p-2 pb-3'>
       <div className="flex flex-col text-center w-full">
        <div className="text-white text-3xl font-extrabold mb-5">
        Search Results for <span className="text-red-600">{searchterm}</span> videos 
        </div>
        <div className="">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  )
}

export default Searchfeed