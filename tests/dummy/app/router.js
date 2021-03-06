import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("wat", {path: "/wat"});
    this.route("defaulta", {path: "/defaulta"});
    this.route("defaultb", {path: "/defaultb"});
    this.route("defaultx", {path: "/defaultx"});
    this.route("edit", {path: "/edit"});
    this.route("isnone", {path: "/isnone"});
    this.route("relationships", {path: "/relationships"});
    this.route("filters", {path: "/filters"});
    this.route("robots", {path: "/robots"});
    this.route("custom-key");
    this.route("delete-object");
});

export default Router;
