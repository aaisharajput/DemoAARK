import React from "react";
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from "../../../Container/Apply/Apply";
import ApplyState from "../../../Context/applyForm/State";

const SalesforceLeadRoles = [
  "  Lead requirements gathering (stakeholder workshops, interviews) with customers, product managers, in areas of overall look, design, functionality of the Salesforce ecosystem.",
  "Lead a team for designing and developing high-volume, low-latency mission-critical global systems and software applications.",
  "Build mission critical web services and software applications on Salesforce Platform including.",
  "Understanding business, technical and functional requirements and convert them into a scalable SF implementation including Analysis, Requirements Definition, Design, Build & Test, Conversion, Deployment for operations delivery functionality.",
  "Investigate and present technology solutions and contribute to software architectural improvements.",
  "Participate and help drive phases of the software development lifecycle.",
  "Provide technical guidance and leading team towards successfully delivering projects along with keeping team motivated.",
  "Leverage a number of proprietary and standard/tools and will be primarily responsible to provide support in effort estimation on tasks, develop and maintain code for various SF applications Write / lead development of well designed, testable, efficient, reusable code.",
  "Lead code reviews, unit test scenarios and fixing defects for in use modules/applications.",
  "Prepare and produce software builds and release management.",
  "Administer change requests, review code, unit-test and resolve any defects in system along with support in developing technical documents for the assigned project. Person will be responsible for.",
];

const SalesforceLeadRequirements = [
  "7+ years of Development experience on the Salesforce platform.",
  "Salesforce certified Platform developer I and II.",
  "Must have prior experience managing at least (3) full life cycle SFDC implementations while holding down the role of Salesforce Lead.",
  "Experience in developing customized solutions within the Salesforce platform by balancing the user input, implementation time frames, custom vs. Out of the Box functionality of SF modules.",
  "Should know or worked on Service console customization.",
  "Experience with custom integration.",
  "Experience with Salesforce Sites, API Calls.",
  "Working experience in AppExchange App Development and Package Creation.",
  "Strong knowledge of Salesforce Objects and Data Model.",
  "Should have good understanding and have experience in implementation of Omni Channel, Open CTI, Case management, Email Services, custom email templates, REST API integration, metrics SLA, operational Dashboard.",
  "Experience implementing and developing in Apex, LWC and JavaScript.",
  "Supporting Project Managers for Technical Roadmap.",
  "Solid understanding of Salesforce Standard Objects and Business Processes around them.",
  "Expertise in Agile software development which includes Scrum & Kanban methodologies is a must. Jira expertise is also mandatory.",
  "Follow agile development practices and best coding practices and strong knowledge in version control using GIT.",
  "Hand-on experience with unit testing and working with continuous integration environment.",
  "Demonstrate core behaviors like collaboration, communication, ownership, and pride of work.",
  "Attention to detail.",
  "Excellent written and verbal communication skills with proven fluency in English.",
  "Please highlight your experience in the following industries: Automotive, Communications, Consumer and Retail, FinTech, Healthcare, Hi-Tech, Industrial, Insurance, Manufacturing, Media, SaaS, Semiconductors, Technology.",
];

export default function SalesforceLead() {
  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Salesforce Lead" />
      <div className={`m-5 ${css.content}`}>
        <h1 className=" mb-3">Salesforce Lead <ApplyState><SweetAlertForm/></ApplyState></h1>
        <Roles roleItems={SalesforceLeadRoles} />
        <Requirements reqItems={SalesforceLeadRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  );
}
