const express = require(`express`);
const helmet = require(`helmet`);

const app = express();

app.use(helmet());

app.get(`/`, (req, res) => {
  res.send(`Hello World from Third party request`);
})

app.get(`/users`, (req, res) => {
  res.send(`User List`);
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})