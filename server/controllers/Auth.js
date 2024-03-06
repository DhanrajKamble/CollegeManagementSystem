const OTP = require("../models/OTP");
const User = require("../models/Users");
const mailSender = require("../utils/mailSender");
const otpGenertor = require("otp-generator");




exports.sendotp = async (req,res)=>{
    try{
        const {email} = req.body;

        const checkUserPresent = await User.findOne({email});

        if(checkUserPresent){
            return res.status(401).json({
                success: false,
                message: `user Already Registered`,
            });
        }
        var otp = otpGenertor.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        const result = await OTP.findOne({
            otp:otp
        });
        console.log("Result is Generate OTP Func");
        console.log("OTP",otp);
        console.log("Result",result);
        while(result){
            otp = otpGenertor.generate(6,{upperCaseAlphabets:false,
            });
        }
        const otpPayload = {email,otp};
        const otpBody = await OTP.create(otpPayload);
        console.log("OTP Body",otpBody);
        res.status(200).json({
            success:true,
            message:`OTP sent successfully`,
            otp
        })
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            error:err.message
        })
    }
}