const express = require('express')
const app = express();
const port = 3000;



app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index.ejs');
});

app.get('/person/:id',function(req,res){
    console.log(req);
    res.render('person.ejs',{id:req.params.id});
});

app.get('/api',function(req,res){
    res.json({name:"orfaes",lastname:"vou"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
