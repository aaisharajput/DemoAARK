import MailService from "./mailService.js";

export const contactInputValidation = async (req, res, next) => {
  const { userName, bussinessEmail, organization, designation, phoneNo,token } = req.body;
  let err = "";
  try{
    if (userName==""  || organization==""  || bussinessEmail=="" ) {
      err = "Please fill required fields!!";
    } else if ( userName.match(/\d/) || userName.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
      err = "First name should have characters only!!";
    } else if (bussinessEmail.match(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
      err = "Email is not valid!!";
    } else if ( designation != "" && (designation.match(/\d/) || designation.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/))) {
      err = "Designation should not contain digits/special symbols";
    } else if ( organization != "" && (organization.match(/\d/) || organization.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) ) {
      err = "Organization should not contain digits/special symbols";
    } else if (phoneNo != "" && phoneNo.length != 10) {
      err = "Phone number should have 10 digits!!";
    } else if (phoneNo != "" && phoneNo.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
      err = "Phone number should not contain special symbols!!";
    } else if (phoneNo != "" && phoneNo.match(/[A-Za-z]/)) {
      err = "Phone number should not contain letters!!";
    } else if(!token){
      err="Check the reCaptcha!";
    } else {
      next();
      return;
    }

  res.status(400).json({Response:"",Error:err,Status:400});

  }catch(error){
    res.status(400).json({Response:"",Error:error,Status:400});
  }
  
};

export const applyInputValidation = (req, res, next) => {
    const { userName, email, jobRole, phoneNo,token } = req.body;
    const cv=req.file;
    let err = "";
    try{
      if (userName==""  || jobRole==""  || email=="" || phoneNo=="") {
        err = "Please fill required fields!!";
      }else if (userName.match(/\d/) || userName.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/) ) {
        err = "First name should have characters only!!";
      } else if (email.match(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
        err = "Email is not valid!!";
      }else if (phoneNo != "" && phoneNo.length <6) {
        err = "Phone number is not valid!!";
      } else if (cv== undefined || cv=="") {
        err="CV is Required!";
      } else if (/\.(jpeg|jpg|pdf)$/i.test(cv.originalname) === false) {
        err="File Format is invalid!";
      } else if (cv.size > 5242880) {
        err="File size should be less than 5MB!";
      }else if(!token){
        err="Check the reCaptcha!";
      } else {
        next();
        return;
      }
      res.status(400).json({Response:"",Error:err,Status:400});
    }catch(error){
      res.status(400).json({Response:"",Error:error,Status:400});
    }

  };

  export const recaptchaTokenValidation=async(req,res,next)=>{
    try{
      const {token} = req.body;
      // replace APP_SECRET_KEY with your reCAPTCHA secret key
      // let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.APP_SECRET_KEY}&response=${token}`);
      await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.APP_SECRET_KEY}&response=${token}`, {
        method: "POST",
      })

      next();
      return;
    }catch(error){
      res.status(400).json({Response:"",Error:"Error verifying token: "+err,Status:400});
    }
  }

export const contactFormFunction = (req, res, next) => {
  let { userName, bussinessEmail, organization, designation, phoneNo, message } = req.body;
      if(designation=="") designation="--Not Provided--"
      if(phoneNo=="") phoneNo="--Not Provided--"
      if(message=="") message="--Not Provided--"
  try {
    MailService.sendContactMail(userName,bussinessEmail,organization,designation,phoneNo,message,(err) => {
        if (err) {
           res.status(400).json({Response:"",Error:"Please enter a valid email"+err,Status:400});
        } else {
          next();
          return;
        }
      }
    );
  } catch (err) {
    console.log(err)
     res.status(400).json({Response:"",Error:err,Status:400});
  }
};

export const applyFormFunction = (req, res, next) => {
  const { userName,email,phoneNo,jobRole } = req.body;
  const cv=req.file;
  try {
    MailService.sendApplyMail(userName,email,phoneNo,jobRole,cv,(err) => {
        if (err) {
             res.status(400).json({Response:"",Error:"Please enter a valid email"+err,Status:400});
          } else {
            next();
            return;
          }
      }
    );
  } catch (err) {
    console.log(err)
     res.status(400).json({Response:"",Error:err,Status:400});
  }
};
