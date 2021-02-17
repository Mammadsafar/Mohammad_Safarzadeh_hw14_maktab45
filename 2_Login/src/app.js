const express = require('express');
const app = express();
const path = require('path');

const home = require('../routes/home');
const about = require('../routes/about');
const login = require('../routes/login');
const profile = require('../routes/profile');

app.use(express.static(path.join(__dirname, "../public")))


// const product = require('./routes/product');

app.use('/profile', profile);

app.use('/about', about);
app.use('/login', login);
// app.use('/products', product);
app.use('/home', home);
app.use('/', home);
// const ejs = require('ejs');

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')



app.listen(8080, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT 8080"); 
});