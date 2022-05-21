import emailjs from '@emailjs/browser';



export default async (contactName, email) => {
    const serviceID = "service_sqi4c0q"

    const templateID = "template_ym1zj7z"

    const templateParams = {
        contactName,
        email
    }
    console.log('templateParams:', templateParams)

    const publicKey = "wF9q7QsIZeLPKfVpO"
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
