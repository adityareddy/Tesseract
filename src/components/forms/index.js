var t = require('tcomb-validation');
var form = require('./components');
var i18n = require('./i18n/en');
var templates = require('./templates/bootstrap');
var stylesheet = require('./stylesheets/bootstrap');

t.form = form;
t.form.Form.templates = templates;
t.form.Form.stylesheet = stylesheet;
t.form.Form.i18n = i18n;

module.exports = t;