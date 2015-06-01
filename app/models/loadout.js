import DS from 'ember-data';

export default DS.Model.extend({
  description:DS.attr(),
  company:DS.belongsTo('company', {async:true}),
  frames:DS.hasMany('frame', {async:true}),
  assets:DS.hasMany('asset', {async:true})
});
