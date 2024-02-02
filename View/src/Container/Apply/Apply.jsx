import style from './Apply.module.css';
import { useContext } from 'react';
import ApplyContext from "../../Context/applyForm/Context";
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SweetAlertForm() {
const {fileInputRef,validationErrors,captchaRef,disabled,userName,email,jobRole,phoneNo,cv,handleChange,handleSubmit,handlePhoneNo,handleFileChange}=useContext(ApplyContext);
const { VITE_REACT_APP_SITE_KEY } = import.meta.env;

    return(
      <>
      
      <button type="button" className={`btn fw-bold ${style.apply} ${style.btn}`} data-bs-toggle="modal" data-bs-target="#myModal">
      Apply Now
    </button>
    <div className="modal" id="myModal">
    <div className="modal-dialog  modal-dialog-centered">
      <div className="modal-content">
  
        <div className="modal-header">
          <h4 className="modal-title fw-bold">Apply</h4>
          <button className={`btn ${style.close}`} data-bs-dismiss="modal">X</button>
        </div>
  
        <div className="modal-body px-4">

        <form className ={style.form }  onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row ">
          <div className="col-12  mt-4">
            <input type="text" className={`form-control ${style.formcontrol}`} placeholder="Name*" value={userName} onChange={handleChange("userName")}/>
          </div>
          <div className="col-12  mt-4">
            <input type="email" className={`form-control ${style.formcontrol}`} placeholder="Email*" value={email} onChange={handleChange("email")} />
          </div>
 
          <div className="col-12  mt-4">
          <PhoneInput placeholder="Enter Phone Number" className={style.number} country={"in"} value={phoneNo} onChange={handlePhoneNo("phoneNo")}/>
          </div>
          <div className="col-12  mt-4">
            <select className={`form-select form-select-sm ${style.formcontrol}`} value={jobRole} onChange={handleChange("jobRole")} aria-label=".form-select-sm example">
              <option value="" disabled> Select Job Role*</option>
              <option value="MES Interface- Software Engineer">MES Interface- Software Engineer</option>
              <option value=".Net Developer">.Net Developer</option>
              <option value="Angular Developer">Angular Developer</option>
              <option value="Cloud Architect (AWS)">Cloud Architect (AWS)</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Front End Angular">Front End Angular</option>
              <option value="Full Stack Engineer – Java Plus Angular">Full Stack Engineer – Java Plus Angular</option>
              <option value="Full Stack Engineer – Java Plus React">Full Stack Engineer – Java Plus React</option>
              <option value="Full Stack Java Developer">Full Stack Java Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Lead Electrical Engineer">Lead Electrical Engineer</option>
              <option value="Node JS Developer">Node JS Developer</option>
              <option value="Python Developer">Python Developer</option>
              <option value="Salesforce Lead">Salesforce Lead</option>
              <option value="Salesforce Tech Lead">Salesforce Tech Lead</option>
              <option value="Sr. UI Developer">Sr. UI Developer</option>
              <option value="Sr. UI Designer">Sr. UI Designer</option>
              <option value="UI Designer">UI Designer</option>
            </select>
          </div>
          <div  className="col-12  ">
          <label className="form-label mb-3" htmlFor="customFile" style={{ fontSize:"15px" , fontWeight:700}}>Attach Your CV*</label>
          <input type="file" className={`form-control ${style.formcontrol}`} ref={fileInputRef}  onChange={handleFileChange("cv")} />
          </div>

          <div className="col-12">
          <div className='formGroup d-flex justify-content-center pt-2'>
          <ReCAPTCHA sitekey={VITE_REACT_APP_SITE_KEY} ref={captchaRef}  />
          </div>
          </div>
         
          
          <div className= {` col-6 my-2 mb-2 ${style.btn} `} >
          <span style={{ color: "red" }}>
          {validationErrors == "" ? " " : validationErrors}
        </span>
          </div>

          <div className= {` col-6 my-2 mb-2 ${style.btn} d-flex justify-content-between`} >

          {disabled==true?<button className={`btn ${style.load} ${style.btn} buttonload`} disabled={disabled}><i className="fa fa-spinner fa-spin"></i></button>: <button type="submit" className={`btn ${style.apply} ${style.btn}`} disabled={disabled}>Submit</button>}
          
          <button type="button" className={`btn ${style.btn} ${style.cancel}`} data-bs-dismiss="modal">Cancel</button>
          </div>

        </div>
      </form>
        </div>
  
      </div>
    </div>
  </div>
  
      </>
    )
}

