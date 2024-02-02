import React from "react";
import Videocss from './Video.module.css'
import GetRoute from "../../Container/server";
import style from './mou.module.css';

export default function Video() {
    return (
        <>
            <section className={Videocss.breadcumb}>
                <div className={Videocss.videobanner}>
                    <img src={GetRoute("/Steep.jpg")} alt="" />
                </div>

                <div className={Videocss.breadcumbBannerCon}>
                    <div className="container">
                        <div className="row">
                            <div className={Videocss.mainBannerCon}>
                                <h2>TIME TO STEPP </h2>
                                <h2>UP YOUR CAREER</h2>

                                <div className={`mt-5 ${Videocss.btns} `}>
                                    <a href="https://forms.office.com/r/JLLJB3YN50?origin=lprLink" className={`mx-4 btn ${Videocss.btn}`}>Register </a>
                                    <a href="https://aarkglobalinc.sharepoint.com/sites/steppdemo" className={`btn ${Videocss.btn}`}>Login </a>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-5">
                            <div className={style.breadCard}>
                                <div className={`card p-3 ${style.yrcard}`}>
                                    <p className="mb-0">1 year duration |  VC, Classrooms and OTJ Training</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}
