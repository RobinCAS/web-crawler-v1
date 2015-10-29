import angular from 'angular';
import router from 'angular-ui-router';
import config from './config/route.js';


let app = angular.module('geCrawler', ['ui.router']);


app
.config(config);
