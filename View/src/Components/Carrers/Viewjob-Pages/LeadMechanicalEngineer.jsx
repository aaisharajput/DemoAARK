import React from "react";
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from "../../../Container/Apply/Apply";
import ApplyState from "../../../Context/applyForm/State";

const LeadMechanicalEngineerRoles = [
  " Coordinate design of individual components or complete complex systems in any of the following industries: Automotive, Communications, Medical Devices, Hi-Tech, Industrial, Manufacturing, Semiconductors, Automation/Robotics, or allied industries.",
  "    Lead requirements gathering (stakeholder workshops, interviews) with customers, product managers, in areas of overall look, design, functionality, interface of the component or complex system.",
  "    Understands clients’ needs; identifies and addresses design parameters and problems; develops and implements solutions.",
  "Work very closely with the Commonality development team (as required, may consist of) Mechanical, Software and Data Engineers, other product Engineering groups, Operations, Manufacturing Engineering, and Product Line Management.",
  "    Provide mechanical engineering expertise (including but not limited to design code requirements, industry best practices, current good engineering practice) while focusing on design quality, reliability, effective cost, and ease of manufacturing.",
  " Develop and design individual components, modular assemblies and sub-assemblies used “commonly” across multiple product lines, complex systems that include sheet metal, mechatronics, automation/robotics, rotary equipment focusing on performance and cost.",
  "    Ensure that designs are compliant with standard design practices and safety codes; ensure appropriate tests are in place to produce reliable products in a repeatable manner.",
  "    Create and release engineering documentation through the ECO process.",
  "Support Program Management with project flow through the PLC Phase gates Prepare presentations and present design concepts, ideas, and test results to internal and external customers.",
  " Interface with other Project Specialists, Lead Engineers and other stakeholders.",
];

const LeadMechanicalEngineerRequirements = [
  " Bachelors or Masters Degree in Mechanical Engineering.",
  "7+ years of experience with increasing responsibilities and complexity of designs.",
  " Working experience with modern tools of the Mechanical Engineering Design world including but not limited to:",
  "Design for Excellence DFX methodologies that include – Manufacturability, Serviceability, Costs, Quality, Integration with upstream and downstream processes, Safety, Operability.",
  "    2D and 3D engineering design and manufacturing tools (e.g., AutoCAD, ProE or other),",
  "    Engineering analysis tools (ANSYS, ProMechanica or similar),",
  "    Mathematical computing and analysis tools knowledge (Matlab, Excel, LabView etc)",
  " Finite element analysis (FEA) and computational fluid dynamics (CFD),",
  "   Computer-aided machining, (CAM) and computer-aided engineering (CAE),",
  "SEMI standards",
  "  RoHS Standards",
  "    Product lifecycle management (PLM),",
  "    Microsoft Office, especially Microsoft Project",
  "    Must have excellent problem solving, negotiations, active listening, oral and written communication",
  "   Diverse working experience in project management, conceptual and detailed design, and construction.",
  "    Discipline Work Plan (Scope, QA/QC,etc)",
  " Knowledge of Interdisciplinary Work Processes/Interface/Deliverables",
  "   Preparation, Update and Maintenance of Project Schedule, DDBs, MDRs.",
  "  Development of Work Breakdown Structure/Activities List.",
  " Flexibility, excellent interpersonal skills.",
  " The ability to work well with other engineering disciplines, as well as outside clients, subcontractors and vendors.",
  "    Time management skills.",
  " Critical Thinking — Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions or approaches to problems.",
  "Demonstrate core behaviors like collaboration, communication, ownership, and pride of work",
  "Attention to detail",
  "   Excellent written and verbal communication skills with proven fluency in English",
  " Please highlight your experience in the following industries: Automotive, Communications, Consumer and Retail, FinTech, Healthcare, Hi-Tech, Industrial, Insurance, Manufacturing, Media, SaaS, Semiconductors, Technology.",
];

export default function LeadMechanicalEngineer() {
  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Lead Mechanical Engineer" />
      <div className={`m-5 ${css.content}`}>
        <h1 className=" mb-3">Lead Mechanical Engineer <ApplyState><SweetAlertForm/></ApplyState></h1>
        <Roles roleItems={LeadMechanicalEngineerRoles} />
        <Requirements reqItems={LeadMechanicalEngineerRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  );
}
