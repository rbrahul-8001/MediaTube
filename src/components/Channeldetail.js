import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ChannelCard  from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Channeldetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      console.log("id is ",id);
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log("data is",data);
      if (data && data.items && data.items.length > 0) {
        setChannelDetail(data.items[0]);
      }
      console.log("channeldata",channelDetail);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };
  
    fetchResults();
  }, [id]);

  return (
    <div className="min-h-screen">
      <div>
        <div
          className="h-80 bg-gradient-to-r from-teal-400 via-fuchsia-500 to-cyan-500"
        />
        <ChannelCard channelDetail={channelDetail} style={{ marginTop: "-93px" }} />
      </div>
      <div className="p-8 flex">
        <div className="mr-8 sm:mr-100" />
        <div className=""><Videos videos={videos} /></div>
      </div>
    </div>
  );
};

export default Channeldetail;