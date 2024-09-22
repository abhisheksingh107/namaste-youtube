import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return Pattern

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg w-48 py-3">
      <div className="p-5">
        <ul className="p-2">
          <li><Link to = "/">Homes</Link></li>
          <li>Shorts</li>
          <li>Subscription</li>
          <li>YouTube Music</li>
        </ul>
        <h1 className="font-semibold pt-5">You {">"}</h1>
        <ul className="p-2">
          <li>Your Channel</li>
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Downloads</li>
        </ul>
        <h1 className="font-semibold pt-5">Subsriptions</h1>
        <ul className="p-2">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-semibold pt-5">Explore</h1>
        <ul className="p-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
