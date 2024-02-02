import React from 'react'
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from '../../../Container/Apply/Apply';
import ApplyState from "../../../Context/applyForm/State";

const PythonDeveloperRoles = [
    'Participate in requirements analysis with customers, team members in areas of overall look, design, functionality and UX of a website.',
'Coordinate with project managers, business analysts, developers and other stakeholders to understand platform requirements, legacy systems.',
'Provide system assessments, design, development, and implementation of server-side applications in Python.',
'Support the needs of, and integrate with user-facing components built by front-end developers.',
'Ensure seamless compliance of the back-end logic with the user-facing side of the system.',
'Work on security vulnerability remediation and fixes.',
'Thoroughly understand software development methodology, architecture standards, and their integration with client’s business functions and technology needs.',
'Employ modern software development techniques to ensure tests are implemented in a way that supports automation.',
'Participate in code inspections throughout life cycle to identify issues.',
'Work on security vulnerability remediation and fixes.',
'Coordinate with QA teams and partner teams.'
  ];
  
  const PythonDeveloperRequirements = [
'    Bachelor’s/Master’s degree in computer science, information technology, or engineering.',
'    5 years of overall experience in a developer capacity using core languages such as Python, Java, C++, or C#.',
    'Hands-on experience in gathering user requirements, building solutions using Python in Test Driven Development (TDD) environment.',
   ' Exposure and understanding of distributing computing frameworks, Relational DB (SQL Server, Oracle, DB2 or others), DevOps tools (Git, Jenkins, Automation Deployment toolkits).',
'    Follow agile development practices and best coding practices and strong knowledge in version control using GIT.',
'    Hand-on experience with unit testing and working with continuous integration environment.',
    'Demonstrate core behaviors like collaboration, communication, ownership, and pride of work.',
  '  Excellent troubleshooting and communication skills.',
    'Attention to detail.',
 '   Expertise in Agile software development which includes Scrum & Kanban methodologies is a must. Jira expertise is also mandatory.',
  '  Excellent written and verbal communication skills with proven fluency in English.',
'    Please highlight your experience in the following industries: Automotive, Communications, Consumer and Retail, FinTech, Healthcare, Hi-Tech, Industrial, Insurance, Manufacturing, Media, SaaS, Semiconductors, Technology.'
  ];
export default function PythonDeveloper() {
  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Python Developer" />
      <div className={`m-5 ${css.content}`}>
        <h1 className=" mb-3">Python Developer <ApplyState><SweetAlertForm/></ApplyState></h1>
        <Roles roleItems={PythonDeveloperRoles} />
        <Requirements reqItems={PythonDeveloperRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  )
}
