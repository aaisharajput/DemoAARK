import React from "react";
import Css from '../../Carrers/Carrer.module.css';



function Card() {
  return (

<div className="row mt-4">


<div className="col-md-6">
    <div className= {`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>.Net Developer</div>
        <a href="/careers/net-developer" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>

<div className="col-md-6">
    <div className={`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>Java Developer</div>
        <a href="/careers/java-developer" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>

<div className="col-md-6">
    <div className={`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>Lead Mechanical Engineer</div>
        <a href="/careers/lead-mechanical-engineer" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>

<div className="col-md-6">
    <div className={`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>Python Developer</div>
        <a href="/careers/python-developer" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>

<div className="col-md-6">
    <div className={`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>Salesforce Lead</div>
        <a href="/careers/salesforce-lead" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>

<div className="col-md-6">
    <div className={`career-card ${Css.careercard}`}>
        <div className={`career-card__title ${Css.careerCardTitle}`}>Sr. UI Developer</div>
        <a href="/careers/sr-ui-developer" className={`career-card__link ${Css.careeCardLinkJob}`}>View Job</a>
    </div>
</div>


</div>

  )}


export default Card;
