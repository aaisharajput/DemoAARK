import Video from "../../Video/Video";
import Intro from "./intro";
import GetRoute from "../../../Container/server";
import SalesforceService from "./salesforceService";

export default function Salesforce() {
    return (
      <>
      <Video videoSource={GetRoute('/salesforce-crm.mp4')} heading="Salesforce CRM" />

    <div className="container py-5">
     <Intro/>
      <SalesforceService />
    </div>
      </>
    )
  }
  