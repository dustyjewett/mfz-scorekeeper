import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  loadouts:DS.hasMany('loadout', {async:true}),
  frames:DS.hasMany('frame', {async:true}),
  assets:DS.hasMany('asset', {async:true})
});
