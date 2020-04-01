const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// bringing routes 
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const tagRoutes = require('./routes/tag')

const mongoose = require('mongoose');

// db connection 
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true,  useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
        .then(() => console.log('DB Connected'))

// app 
const app = express()

// middleware 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors 
if(process.env.NODE_ENV == 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}`}));
}

// routes middleware 
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);

// port 
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app listening on port ${port}`))