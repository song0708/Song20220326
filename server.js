const express = require('express');
const app = express();
const port= "3000";
const ip = "127.0.0.1";

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/project',express.static(__dirname + 'public/project'))

app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
	res.render('index',{text:'This is EJS'})
})
app.listen(port,ip, () => console.log('server is running at http://'+ip+':'+ port));