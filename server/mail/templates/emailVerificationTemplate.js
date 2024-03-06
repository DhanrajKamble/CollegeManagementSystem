const otpTemplate = (otp)=>{
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>OTP Verification Email</title>
            <style>
                
            </style>
        </head>
        <body>
            <div class="container">
                <div class="message">OTP verification message</div>
                <div class="body">
                    <p>Dear User,</p>
                    <p>Thank you for registering to our site, please use the following OTP (One-Time Password) to verify your account:</p>
                    <h2 clss="highlight">${otp}</h2>
                    <p>This OTP is valid for 5 minuts. If you did not request this verification, please disregard this email.</p>
                </div>
            </div>
        </body>
    </html>
    `
}

module.exports = otpTemplate;