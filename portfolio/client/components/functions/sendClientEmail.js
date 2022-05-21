import emailjs from '@emailjs/browser';



export default async (contactName, email) => {
    const serviceID = "service_sqi4c0q"

    const templateID = "template_ym1zj7z"

    const templateParams = {
        contactName,
        email
    }

    const publicKey = "wF9q7QsIZeLPKfVpO"
    try {
        const message = await emailjs.send(
            serviceID,
            templateID,
            templateParams,
            publicKey);
    } catch (err) {
        window.alert("Opps, we don't know what happened there. You may not recieve a confirmation email. It may be better to connect with Quintin via one of the links in the Contact Information tab.");
    }
}
