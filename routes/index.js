var express = require('express');
var Feed = require('rss-to-json');
var router = express.Router();

function Title(x){ return x + ' | AllCAD' };
var base_title = ' | AllCAD'
var pages = {           /*   Titles   */            /*   URLs   */            /*   Template Names   */
  "home":               {"title":'Home',            "url":'/',                "template":'home'},
  "contact":            {"title":'Contact',         "url":'/contact',         "template":'contact'},
  "about":              {"title":'About',           "url":'/about',           "template":'about'},
  "training_suites":    {"title":'Training Suites', "url":'/training-suites', "template":'training_suites'},
  "bridge":             {"title":'Bridge',          "url":'/bridge',          "template":'bridge'},
  "vault":              {"title":'Vault',           "url":'/vault',           "template":'vault'},
  "jobs":               {"title":'Jobs',            "url":'/jobs',            "template":'jobs'},
  "press":              {"title":'Press',           "url":'/press',           "template":'press'},
}

router.get('/', function(req, res, next) {
  var blog = {};
  var BLOG_FEED_URL = "https://medium.com/feed/@Akinzwill";
  var blog_url = "https://medium.com/@Akinzwill";
  Feed.load(BLOG_FEED_URL, function(err, rss){
    blog = res; //.slice(0,5);
  });
  // TODO: Start creating tests, the first one will test that this method of retrieving blog posts still works

  res.render('home', { "title": Title('Home'), "blog": blog });
});

/* GET main pages */
router.get('/:pg_str', function(req, res, next) {
  var pg_str = req.params['pg_str'];
  if(pages[pg_str]){
    res.render(pages[pg_str].template, { title: Title(pages[pg_str].title) });
  }else{
    res.render('error', { title: Title('Page Not Found') });
  }
});

module.exports = {
  'router': router,
  'pages': pages,
}
