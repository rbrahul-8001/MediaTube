import React from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { TiTick } from "react-icons/ti";
import Videos from "./Videos";

const Videodetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    console.log("hi",videoDetail);

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  const { snippet, statistics } = videoDetail || {};
  const title = snippet?.title || 'Loading...';
  const channelTitle = snippet?.channelTitle || '';
  const channelId = snippet?.channelId || '';

  const viewCount = statistics?.viewCount || '';
  const likeCount= statistics?.likeCount|| '';


  return (
    <div className="bg-black pt-[120px] lg:pt-[80px] w-full">
      <div className="flex justify-center">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          width="95%"
          height="650px"
          controls
        />
      </div>
      <div class=" text-white text-xl font-bold px-8 py-3">{title}</div>
      <div class="flex flex-row justify-between py-1 px-8 font-bold text-gray-400">
        <a href={`/channel/${channelId}`}>
          <div class="text-sm md:text-lg flex  items-center">
            {channelTitle}
            <i class="text-gray-500 text-sm ml-1"><TiTick/></i>
          </div>
        </a>
        <div class="flex flex-row space-x-10 items-center  font-bold text-gray-400">
          <div class="text-sm text-opacity-70">
            {parseInt(viewCount).toLocaleString()} views
          </div>
          <div class="text-sm text-opacity-70  font-bold">
            {parseInt(likeCount).toLocaleString()} likes
          </div>
        </div>
      </div>
      
      <div className="flex justify-center text-white text-5xl mt-5 font-extrabold ">
        Related <span className="ml-4 text-red-700">videos</span>
      </div>
      <div className=" w-[82%] mx-auto pb-5">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Videodetail;
