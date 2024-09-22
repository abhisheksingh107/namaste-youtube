import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Video_API } from "../utils/constant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const fecthData = async () => {
    const data = await fetch(Youtube_Video_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div
      className={
        !isMenuOpen
          ? "flex gap-5 flex-wrap justify-evenly"
          : "flex gap-5 flex-wrap"
      }
    >
      {videos && videos.length > 0 ? (
        videos.map((video, index) => (
          <Link to={"watch?v=" + video.id}>
            <VideoCard key={index} info={video} />
          </Link>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default VideoContainer;
