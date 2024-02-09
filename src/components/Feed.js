import React from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex flex-row gap-9 mt-[120px] md:mt-[60px]">
      <div className=" w-[45%] sm:w-[30%] lg:w-[15%] border-r-2 hidden md:block">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="flex flex-col text-center w-full">
        <div className="text-white text-3xl font-extrabold">
          {selectedCategory} <span className="text-red-600">VIDEOS</span>
        </div>
        <div className="">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
