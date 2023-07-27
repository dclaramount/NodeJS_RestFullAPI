const express = require(`express`);

const bodyParser = require(`body-parser`);

const app = express();

const port = 3000;

app.use(bodyParser.json());

//Creating a Route for the API
let todos =[
  {id:1, title:`Todo 1`},
  {id:2, title:`Todo 2`},
  {id:3, title:`Todo 3`},
]

app.get(`/todos`, (req,res)=>{
  res.json(todos);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
