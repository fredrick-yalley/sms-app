
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const app = require('./app');


const DBLocal = process.env.DATABASE_LOCAL;
const DB = process.env.DATABASE;
mongoose
.connect(DB)
.then(() => console.log('Database Connected Successfully'));



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running');
})
