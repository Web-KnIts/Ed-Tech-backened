const nodemailer =  require('nodemailer')

const mailSender = async(email,title,body)=>{
    try{
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_Host,
            auth:{
                user:process.env.MAIL_User,
                pass:process.env.MAIL_Pass,
            }
        })

        let info = await transporter.sendMail({
            from:'Edu Tech Otp - project by Laxshay',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log(info)
        return info;
    }       
    catch(err)
    {
        console.log(error.message)
    }
}

module.exports = mailSender;