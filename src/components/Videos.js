import React from "react";
import { TiTick } from "react-icons/ti";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Videos = ({ videos }) => {
  return (
    <div className="flex justify-center flex-wrap gap-10 text-white ">
      {!videos ? (
        <div className="flex justify-center items-center w-full h-[100vh]">
          <Loader />
        </div>
      ) : (
        videos.map((video) => {
          return (
            <div className="flex flex-col w-[280px] h-[300px] mt-3 bg-gray-900 rounded-lg ">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <Link
                  to={
                    video?.id?.videoId
                      ? `/video/${video?.id?.videoId}`
                      : `/video/cV2gBU6hKfY`
                  }
                >
                  <img
                    src={video?.snippet?.thumbnails?.high?.url}
                    className="object-cover w-full h-full absolute top-0 left-0 rounded-lg "
                    alt={video?.snippet?.title}
                    // style={{ padding: 0, margin: 0, border: 0 }} // Added this style
                  />
                </Link>
              </div>
              <Link
                to={
                  video?.id?.videoId
                    ? `/video/${video?.id?.videoId}`
                    : `/video/cV2gBU6hKfY`
                }
              >
                {" "}
                <div>{video?.snippet?.title.slice(0, 60)}</div>
              </Link>
              <Link to={ `/channel/${video?.snippet?.channelId}`}>
                <div className="text-gray-400 flex items-center gap-3 justify-center">
                  {video?.snippet?.channelTitle}
                  <span className="bg-white rounded-full text-xs">
                    <TiTick />
                  </span>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Videos;
