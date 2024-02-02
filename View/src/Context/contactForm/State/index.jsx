import React, { useState,useRef } from "react";
import ContactContext from "../Context"
import { contactUs } from "../../../../API/endpoints";

export default function ContactState(props) {
    const {children} =props;
    const captchaRef = useRef(null);
    const [formValues, setFormValues] = useState({ 
        userName: "",
        bussinessEmail: "",
        organization: "",
        phoneNo: "",
        designation: "",
        message:""
       });

    const [validationErrors, setvalidationErrors] = useState("");
    const [disabled, setDisabled] = useState(false);
    const {userName,bussinessEmail,organization,phoneNo,designation,message}=formValues;

    //higher order function
    function handleChange(key){
        return function(event){
            setFormValues({
                ...formValues,[key]:event.target.value
            })
        }
    }

    function handlePhoneNo(key){
      return function(value){
          setFormValues({
              ...formValues,[key]:value
          })
      }
    }

    async function onSubmitPress(token){
       const result= await contactUs(formValues,token)
       if(result.status!==200){
        // setvalidationErrors(result.error);
        Swal.fire({title:"Warning", icon: "warning", text: result.error,confirmButtonColor: '#4a5c9c', });
       }
       else{
        Swal.fire({title:"Contact", icon: "success", text: result.message,confirmButtonColor: '#4a5c9c', });
       }

       captchaRef.current.reset();
       setDisabled(false);
    }

    function handleSubmit(event){
      event.preventDefault();
      let token = captchaRef.current.getValue();

      if (!userName.trim()) {
        setvalidationErrors("Name is Required!");
      } else if ( userName.match(/\d/) || userName.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
        setvalidationErrors("Name should have characters only!");
      } else if (!bussinessEmail.trim()) {
        setvalidationErrors("Bussiness Email is Required!");
      }  else if (bussinessEmail.match(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
        setvalidationErrors("BussinessEmail is not valid!");
      } else if (!organization.trim()) {
        setvalidationErrors("Organization is Required!");
      } else if ( organization.trim() != "" && (organization.match(/\d/) || organization.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) ) {
        setvalidationErrors("Organization should have characters only!");
      } else if ( designation.trim() != "" && (designation.match(/\d/) || designation.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/))) {
        setvalidationErrors("Designation should have characters only!");
      } else if (phoneNo.trim() != "" && phoneNo.length < 6) {
        setvalidationErrors("Phone number is not valid!");
      } else if(!token){
        setvalidationErrors("Check the reCaptcha!");
      } else{
        onSubmitPress(token);
        setvalidationErrors("");
        setFormValues({
          userName: "",
          bussinessEmail: "",
          organization: "",
          phoneNo: "",
          designation: "",
          message:"",
        });
        setDisabled(true);

      }
    }

	return <ContactContext.Provider value={{validationErrors,captchaRef,disabled,userName,bussinessEmail,organization,phoneNo,designation,message,handleChange,handleSubmit,handlePhoneNo}} >{children}</ContactContext.Provider>;
}