import express from "express";
import multer from "multer";
import {contactInputValidation,applyInputValidation,contactFormFunction,applyFormFunction,recaptchaTokenValidation} from "../services/IndexService.js";
import {MailedSuccess} from "../Controllers/IndexController.js";
import rateLimit from 'express-rate-limit';

const Router = express.Router();
const handleRateLimitExceeded = (req, res, next) => {
  // Customize the response or add additional logic here
  res.status(400).json({Response:"",Error:"Too many email requests, please try again after a few minutes",Status:400});
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // limit each IP to 10 email requests per windowMs
  handler: handleRateLimitExceeded, // Use the custom handler
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./resume/");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.post("/contactUs",contactInputValidation,recaptchaTokenValidation,limiter,contactFormFunction,MailedSuccess)
Router.post("/applyNow",upload.single("cv"),applyInputValidation,recaptchaTokenValidation,limiter,applyFormFunction,MailedSuccess)

export { Router as IndexRoutes };
