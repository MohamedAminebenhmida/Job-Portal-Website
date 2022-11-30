require('dotenv').config();
const connectDB = require('./config/connectDB');

express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;

//connection with database
connectDB();
// miDDleware
app.use(express.json())
app.use('/api/auth',require("./routes/authRoutes"));
app.use('/api/user',require("./routes/userRoutes"));
app.listen(PORT ,()=>console.log(`server running on port ${PORT}`));