import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  description:DS.attr(),
  company:DS.belongsTo('company', {async:true}),
  frames:DS.hasMany('frame', {async:true}),
  assets:DS.hasMany('asset', {async:true}),
  calculateSystems:function(){
    console.log('get systemsCount');
    var systems = 0;
    var thisModel = this;
    this.get('frames').forEach(function(frame){
      if(frame && !frame.currentState.isLoading){
        systems += frame.get('systems').length;
      } else {
        frame.on('didLoad', function(){
          console.log('calculating');
          thisModel.set('systemsCount', this.get('id'));
        });
      }
    });
    return systems;
  },
  systemsCount:Ember.computed('frames', {
    get:function(){
      return this.calculateSystems();
    },
    set:function(prop, val){
      return this.calculateSystems();
    }
  })
});
