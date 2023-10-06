const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


require('./config/session.config')(app);

app.use(cors({
    origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());

require('dotenv/config');



mongoose.connect("mongodb://localhost:27017/zero-waste")
.then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


const index = require('./routes/index');
app.use('/', index);
 
const authRouter = require('./routes/auth.routes'); 
app.use('/', authRouter);


app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${process.env.PORT}`);
});