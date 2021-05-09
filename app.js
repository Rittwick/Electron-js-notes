
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(3001);


app.get('/:id', (req, res) => {
    const id = req.params.id;
    if(id==1)
    {
        // console.log('next'+id);
        res.render(`chapter_${id}`, {next:+id + 1, prev: null}); 
    }
    else if(id==11)
    {
        // console.log('prev'+id);
        res.render(`chapter_${id}`, {prev: +id - 1, next: null});
    }
    else
    {
        // console.log('prev'+id+"|"+'next'+id);
        res.render(`chapter_${id}`, {next: +id + 1, prev: +id - 1})
    }
})

app.get('/', (req, res) => {
    res.render('index'); 
})