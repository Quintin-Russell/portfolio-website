# portfolio-website

## www.quintinrussell.us

### A full-stack showcase of my work, skills, and my story

<dl>
  <dt>
    Why: 
  </dt>
</dl> 
I built this project to centralize my contact information and projects in a format that the average person can enjoy. I also wanted to create an easy way for people to directly get in touch with me.

<dl>
  <dt>
    Technologies Used:
  </dt>
</dl>

- React.js
- react hooks
- react-spring/parallax
- emotion (CSS-in-JS)
- NodeJS
  - Express.js
  - PostgreSQL
- jQuery
- Webpack
- HTML5
- CSS3

<dl>
  <dt>
    Getting Started:
  </dt>
</dl>

1. In your terminal, switch to the directory in which you would like to place the repository.
2. Clone the repository.
  ```shell
  git clone git@github.com:Quintin-Russell/portfolio-website.git
  ```
3. Enter into the repository.
  ```shell
  cd portfolio-website
  ```
4. Copy the `.env example` file and set it up as your '.env' file. Assign your appropriate port numbers to the `dev port` and the `server port` fields
5. Install all dependencies.
  ```shell
  npm install
  ```
6. Set up a `postgresql` database and add the database URL to the `.env` file:
```
https://www.postgresql.org/docs/9.0/tutorial-createdb.html
```
6. Start the `postgresql` server
  ```shell
  sudo service postgresql start
  ```
7. Run the following command in the terminal.
  ```shell
  npm run dev
  ```
