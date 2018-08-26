const express = require('express');
const hbs = require('hbs');
var app = express();


hbs.registerPartials(__dirname + '/views/partials')
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get ('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'homepage',
        welcomeMessage: 'welcome to my website',
        currentYear: new Date().getFullYear()
    });
});
  
app.get('/about',(req, res) => {
    res.render ('about.hbs', {
        pageTitle: 'about page',
        currentYear: new Date().getFullYear()
    });
});
app.get ('/project', (req, res)=> {
    res.render('poject.hbs',{
        pageTitle: 'projects'

    });
});


app.get('/bad', (req ,res) => {
    res.send({
        errorMessage:'error cannot handle'
    });
});

app.listen(port , () =>{
    console.log(`server at port ${port}`);
});
