var express = require('express');
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
}

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