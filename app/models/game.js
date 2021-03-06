import DS from 'ember-data';

export default DS.Model.extend({
  description:DS.attr(),
  date:DS.attr(),
  loadouts:DS.hasMany('loadout', {async:true}),
  rounds:DS.hasMany('round', {async:true})
});
