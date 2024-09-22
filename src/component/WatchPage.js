import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [param] = useSearchParams();
  console.log(param.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-20 py-5">
      <iframe className="rounded-xl"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+ param.get("v") +"?si=tBJDgUnTrEpccXIA&autoplay=1&muted=0&autohide=1&showinfo=0&controls=1"}
      ></iframe>
    </div>
  );
};

export default WatchPage;
