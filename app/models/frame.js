import DS from 'ember-data';
import Ember from 'ember';
import _ from 'npm:lodash';

export default DS.Model.extend({
  name:DS.attr(),
  systems:DS.attr(),
  counts:Ember.computed('systems', function(){
    return _.groupBy(this.get('systems'));
  })
});
