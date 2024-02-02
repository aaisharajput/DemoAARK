import React, { useState,useRef } from "react";
import ApplyContext from "../Context"
import { applyNow } from "../../../../API/endpoints";

export default function ApplyState(props) {
    const {children} =props;
    const captchaRef = useRef(null);

    const [formValues, setFormValues] = useState({ 
        userName: "",
        email: "",
        jobRole: "",
        phoneNo: "",
        cv: ""
    });

    const [validationErrors, setvalidationErrors] = useState("");
    const [disabled, setDisabled] = useState(false);
    const {userName,email,jobRole,phoneNo,cv}=formValues;
    const fileInputRef = useRef();

    //higher order function
    function handleChange(key){
        return function(event){
            setFormValues({
                ...formValues,[key]:event.target.value
            })
        }
    }

    const handleFileChange = (key) => {
      return function(event){
        setFormValues({
            ...formValues,[key]:event.target.files[0]
        })
     }
    };

    function handlePhoneNo(key){
      return function(value){
          setFormValues({
              ...formValues,[key]:value
          })
      }
    }

    async function onApplyPress(formData){
      const result= await applyNow(formData)
       if(result.status!==200){
        // setvalidationErrors(result.error);
        Swal.fire({title:"Warning", icon: "warning", text: result.error, confirmButtonColor: '#4a5c9c'});
       }
       else{
        Swal.fire({title:"Apply", icon: "success", text: result.message, confirmButtonColor: '#4a5c9c'});
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
      } else if (!email.trim()) {
        setvalidationErrors("Bussiness Email is Required!");
      }  else if (email.match(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
        setvalidationErrors("Email is not valid!");
      }  else if (!phoneNo.trim()) {
        setvalidationErrors("Phone number is Required!");
      }  else if (phoneNo.length < 6) {
        setvalidationErrors("Phone number is not valid!");
      } else if (!jobRole.trim()) {
        setvalidationErrors("Job Role is Required!");
      } else if (cv=="") {
        setvalidationErrors("CV is Required!");
      } else if (/\.(jpeg|jpg|pdf)$/i.test(cv.name) === false) {
        setvalidationErrors("File Format is invalid!");
        return false;
      } else if (cv.size > 5242880) {
        setvalidationErrors("File size should be less than 5MB!");
        return false;
      }else if(!token){
        setvalidationErrors("Check the reCaptcha!");
      }else{
        const formData = new FormData();
        formData.append("cv", cv);
        formData.append("userName", userName);
        formData.append("email", email);
        formData.append("jobRole", jobRole);
        formData.append("phoneNo", phoneNo);
        formData.append("token", token);

        onApplyPress(formData);
        setvalidationErrors("");
        setFormValues({
          userName: "",
          email: "",
          jobRole: "",
          phoneNo: "",
          cv: ""
        });
        setDisabled(true);
        fileInputRef.current.value = '';
      }
    }

	return <ApplyContext.Provider value={{fileInputRef,validationErrors,captchaRef,disabled,userName,email,jobRole,phoneNo,cv,handleChange,handleSubmit,handlePhoneNo,handleFileChange}} >{children}</ApplyContext.Provider>;
}



// else if (phoneNo.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
//   setvalidationErrors("Phone number should not contain special symbols!");
// } else if (phoneNo.match(/[A-Za-z]/)) {
//   setvalidationErrors("Phone number should not contain letters!");
// } 