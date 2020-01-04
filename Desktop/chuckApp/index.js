//https://api.chucknorris.io/jokes/random
//https://api.chucknorris.io/jokes/random?category={category}
//["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
//

const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
var path = require('path');
const url = require('url');
const http = require("http")

const app = express();
app.use(express.static('public'));


//handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//index route
//index route
app.get('/', (req, res, next) => {
  const url = 'https://api.chucknorris.io/jokes/random';

  let output;
  axios
    .get(url)
    .then(response => {
      output = response.data.value;
      res.render('index', { output });
    })
    .catch(error => next(error));
});

app.get('/about', (req, res) => {
  res.render('about');
});


//https://api.chucknorris.io/jokes/random?category={category}
app.get('/submit', (req, res, next) => {
  let param1 = req.query.value;
  let param = param1.toLowerCase();
  let output;
  const url1 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url1)
    .then(response => {
      output = response.data.value;
      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/categories', (req, res) => {
  let cat = [
    'animal',
    'career',
    'celebrity',
    'dev',
    'explicit',
    'fashion',
    'food',
    'history',
    'money',
    'movie',
    'music',
    'political',
    'religion',
    'science',
    'sport',
    'travel'
  ];
  //https://api.chucknorris.io/jokes/random?category={category}
  res.render('categories', { cat });
});

app.get('/animal', (req, res) => {
  let param = 'animal';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/career', (req, res) => {
  console.log('running from animal');
  let param = 'career';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/celebrity', (req, res) => {
  console.log('running from animal');
  let param = 'celebrity';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/dev', (req, res) => {
  console.log('running from animal');
  let param = 'dev';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/explicit', (req, res) => {
  console.log('running from animal');
  let param = 'explicit';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/fashion', (req, res) => {
  console.log('running from animal');
  let param = 'fashion';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/food', (req, res) => {
  console.log('running from animal');
  let param = 'food';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/history', (req, res) => {
  console.log('running from animal');
  let param = 'history';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/money', (req, res) => {
  console.log('running from animal');
  let param = 'money';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/movie', (req, res) => {
  console.log('running from animal');
  let param = 'movie';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/music', (req, res) => {
  console.log('running from animal');
  let param = 'music';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/political', (req, res) => {
  console.log('running from animal');
  let param = 'political';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/religion', (req, res) => {
  console.log('running from animal');
  let param = 'religion';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/science', (req, res) => {
  console.log('running from animal');
  let param = 'science';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/sport', (req, res) => {
  console.log('running from animal');
  let param = 'sport';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;

      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.get('/travel', (req, res) => {
  console.log('running from animal');
  let param = 'travel';
  url3 = 'https://api.chucknorris.io/jokes/random?category=' + param;

  axios
    .get(url3)
    .then(response => {
      output = response.data.value;
      res.render('index', { output, param });
    })
    .catch(error => next(error));
});

app.use((err, req, res, next) => {
  res.status(404 || 500);
  console.log(err);
  res.render('404');
});

const port = 80;
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
}); 
