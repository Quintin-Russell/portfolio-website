import yagmail
import json
import sendEmail.json as emailInfo

emailInfo = json.load(emailInfo)

subject = emailInfo.subject
reciever = emailInfo.reciever
body = emailInfo.greeting + emailInfo.name + "," + emailInfo.message
myEmail = "team.q.russell@gmail.com"

yag = yagmail.SMTP(myEmail)
yag.send(
    to=receiver,
    subject=subject,
    contents=body,
)
