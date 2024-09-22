import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails} = snippet;
  const {viewCount} = statistics;

  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul className="pl-5">
        <li className="font-semibold py-1">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
      </ul>
        <p className="px-7 text-gray-500">{(viewCount / 1000000).toFixed(1)}M views</p>
    </div>
  );
};

export default VideoCard;
