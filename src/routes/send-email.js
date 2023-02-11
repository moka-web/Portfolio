const {Router} = require("express");
const router = Router();
const nodemailer= require("nodemailer");



router.post('/send-email', async (req,res)=>{
  const {name , email , message } =req.body

  contenthtml= `<h1>emai info </h1>
                <ul>
                    <li>nombre: ${name}</li>
                    <li>email: ${email}</li>
                    <li>mensaje: ${message}</li>
                </ul>`;

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                     port: 587,
                     auth: {
                         user: 'mokajua@gmail.com',
                         pass: 'gfjywtkiadvxwyrw'
                     },
                     tls: {
                        rejectUnauthorized: false
                    }
                 });
                 
                 
                const info = await transporter.sendMail({
                    from: 'mokajua@gmail.com',
                    to: 'mokajua@gmail.com',
                    subject:`website contact form`,
                    html:contenthtml,
                 })

                 console.log(info.messageId)


    res.send('received')
})


module.exports = router;





// const sendEmail = async (to , subject , content) => {

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//          port: 587,
//          auth: {
//              user: 'mokajua@gmail.com',
//              pass: 'gfjywtkiadvxwyrw'
//          },
//          tls: {
//             rejectUnauthorized: false
//         }
//      });


//     try {
//         const mailOptions = {
//             from: 'mokajua@gmail.com',
//             to: to,
//             subject: subject,
//             html:`<div>${content}</div>`,
//          }

//         const info = await transporter.sendMail(mailOptions)
//         logger.info(info)
        
//      } catch (error) {
//         logger.error(error)
//      }
     
// }