require('dotenv').config();
const express = require('express')
const db = require('./db')
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');

const fetch = async (sql, params, res, next) => {
  try{
    const result = await db.query(sql)
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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
