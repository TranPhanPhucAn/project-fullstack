require("dotenv").config();
import nodemailer from "nodemailer";
let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: '"Phuc An 👻" <rotgodunchain@gmail.com>', // sender address
    to: dataSend.receiverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: getBodyHTMLEmail(dataSend), // html body
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `<h3>Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Phuc An</p>
    <p>Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div> 
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
    
    <p>Nếu các thông tin trên là đúng, vui lòng click vào đường link bên dưới để xác nhận hoàn tất thủ tục đặt lịch khám bệnh</p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here</a>
    </div>

    <div>Xin chân thành cám ơn!</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `<h3>Dear ${dataSend.patientName}!</h3>
    <p>You have received this email because you made an online medical appointment on Phuc An</p>
    <p>Information for scheduling medical examination:</p>
    <div><b>Time: ${dataSend.time}</b></div> 
    <div><b>Doctor: ${dataSend.doctorName}</b></div>
    
    <p>
If the above information is correct, please click on the link below to confirm completion of the medical examination appointment procedure</p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here</a>
    </div>

    <div>Best regard!</div>
    `;
  }
  return result;
};
module.exports = {
  sendSimpleEmail,
};
