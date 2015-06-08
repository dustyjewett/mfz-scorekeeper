import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies', function() {
    this.route('index');
    this.route('new');
    this.route('company', {path: '/companies/:company_id'});
  });
  this.route('frames');
  this.route('frames/frame',  {path: '/frames/:frame_id'});
  this.route('games');
  this.route('games/new');
  this.route('games/game', {path: '/games/:game_id'});
});

export default Router;
