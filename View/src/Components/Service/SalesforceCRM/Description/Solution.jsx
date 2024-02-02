import Video from "../../../Carrers/video/Video";
import GetRoute from "../../../../Container/server";
import Description from "./description";

export default function Solution() {

  const list=["Process simplification, harmonization, and key KPI improvement",
    "Cloud adoption and migration strategy roadmap","Business case, return on investment (ROI), product evaluation, proof of concept",
    "License advisory, rationalization, and optimization","Cloud architecture definition","Cloud platform recommendation"]
   

  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Solution Finalization" />
      <div className="container py-5">
        <Description current="Solution Finalization" src= "/saleforce-img-2.jpg" list={list}/>
      </div>
    </>
  );
}
