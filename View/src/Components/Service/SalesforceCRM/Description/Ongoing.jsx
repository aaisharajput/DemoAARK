import Video from "../../../Carrers/video/Video";
import GetRoute from "../../../../Container/server";
import Description from "./description";

export default function Ongoing() {

  const list=["Operations support to run day-to-day business","Measure KPIs and implement tweaks",
    "Implement stakeholders feedback about ease of use and improvements","Monitor ROI vs goals and implement changes","Enhancements and upgrades",
    "Impact analysis and support for major releases version upgrades etc"]


  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Ongoing Support" />

      <div className="container py-5">
        <Description current="Ongoing Support" src="/s2.png" list={list}/>
      </div>
    </>
  );
}
