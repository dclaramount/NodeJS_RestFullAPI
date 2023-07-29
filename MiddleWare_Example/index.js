const express = require(`express`);

const app = express();

const loggerMiddleWare =(req,res, next) =>{
  const currentTimeStamp = new Date().toISOString();
  console.log(`[${currentTimeStamp}] ${req.method} ${req.url}`);
  next();
}
app.use(loggerMiddleWare);
app.get('/', (req, resp) => {
  resp.send(`hello world`);
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})