import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div
    className={`shadow-none rounded-2xl flex justify-center items-center w-80 md:w-80 h-96 m-auto mt-${marginTop}`}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="flex flex-col justify-center text-center text-white">
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          className="rounded-full h-48 w-48 mb-4 border border-gray-300"
        />
        <h6 className="text-lg">
          {channelDetail?.snippet?.title} <i className="text-gray-500 ml-2"><svg className="w-4 h-4 inline text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></i>
        </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <p className="text-gray-500 text-xl font-semibold">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </p>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;