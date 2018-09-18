const express = require('express');
const handlebars = require('hbs');
const app = express();

handlebars.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.hbs', {
      condensedTitle: 'welcome message',
      currentYear: new Date().getFullYear()
    })
  })
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  })

app.get('/about', function(req, res)
{  
   res.render('about.hbs', {
     pageTitle: 'about us',
     currentYear: new Date().getFullYear()
    
   })
  
  // res.send('you visited the about page...')
  // res.send('this page works just fine !')
} )

