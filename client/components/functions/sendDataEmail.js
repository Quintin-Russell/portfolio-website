import emailjs from '@emailjs/browser';



export default async (data) => {
    const serviceID = "service_sqi4c0q"

    const templateID = "template_oxo9jbc"

    const templateParams = {
        company: data.company,
        contactName: data.contactName,
        email: data.email,
        linkedInUrl: data.linkedInUrl,
        message: data.message,
        phoneNumber: data.phoneNumber
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
