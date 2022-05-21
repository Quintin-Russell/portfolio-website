import yagmail

reciever =
body =

yag = yagmail.SMTP(myEmail)
yag.send(
    to=receiver,
    subject=subject,
    contents=body,
)
