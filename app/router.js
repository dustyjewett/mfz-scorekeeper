import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies');
  this.route('frames');
  this.route('games');
  this.route('game', {path: '/game/:game_id'});
});

export default Router;
