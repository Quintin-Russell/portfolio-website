import { SMTPClient } from 'emailjs';

const serviceID = "service_sqi4c0q"

const templateID = "template_ym1zj7z"

const templateParams = {
    name
    email
}

const publicKey = "wF9q7QsIZeLPKfVpO"

export default async sendEmail(name, email) {
    try {
        const message = await emailjs.send(
            serviceID,
            templateID,
            templateParams,
            publicKey);
        console.log(message);
    } catch (err) {
        console.error(err);
    }
}

// {
//     "eamil": "team.q.russell@gmail.com",
//         "name": null,
//             "reciever": null,
//                 "subject": "Hi!",
//                     "greeting": "Hi there ",
//                         "message": "\\n\\n Thanks for reaching out. \\n\\n This is a confirmation that we recieved your message. It will be relayed to Quintin and he will get back to you as soon as possible!"
// }
