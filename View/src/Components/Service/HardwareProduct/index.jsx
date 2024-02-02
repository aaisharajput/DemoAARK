import Video from "../../Video/Video";
import Intro from "./intro";
import GetRoute from "../../../Container/server";
import HardwareService from "./hardwareService";
export default function Hardware() {
  return (
    <>
    <Video videoSource={GetRoute('/hardware-product-engineering.mp4')} heading="Hardware Product Engineering" />

    <div className="container py-5">
      <Intro/>
      <HardwareService/>
    </div>
    </>
  );
}
