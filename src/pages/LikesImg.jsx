import React from "react";
import Gelerey from "../components/Gelerey";
import { useGlobalContext } from "../hooks/useGlobalContext";
function LikesImg() {
  const { likeImages } = useGlobalContext();
  console.log(likeImages);
  return (
    <>
      <Gelerey data={{ results: likeImages }} />
    </>
  );
}

export default LikesImg;
