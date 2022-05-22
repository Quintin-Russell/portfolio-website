require('dotenv').config();
const express = require('express')
const db = require('./db')
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');

const fetch = async (sql, params, res, next) => {
  try{
    const result = await db.query(sql, params)
    return res.status(201).json(result.rows)
  } catch (err) {
    next(err)
  }
}

const app = express();
const jsonMiddleware = express.json();

app.use(staticMiddleware);

app.get('/api/projects', (req, res, next) => {
  const sql = `
  select *
  from "projects"
  `;

  return fetch(sql, [], res, next)
})

app.use(jsonMiddleware);

app.post('/api/contact', (req, res, next) => {
  const {contactName, company, email, linkedInUrl, phoneNumber, message} = req.body

  const par = ["contactName", "email", "phoneNumber", "message"]
  for (const x of par) {
    if (!x in req.body) throw new ClientError(400, `${x} is a required field`)
  }

  const params = [contactName, company, email, linkedInUrl, phoneNumber, message]

  const sql = `
  INSERT into "contact" ("contactName", "company", "email", "linkedInUrl", "phoneNumber", "message")
  values ($1,$2,$3,$4,$5,$6)
  returning *
  `

  return fetch(sql, params, res, next)
})

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
