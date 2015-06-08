import Ember from 'ember';

export default Ember.Component.extend({
  frame:Ember.required(),
  editable:false,
  editMode:false,
  actions:{
    startEdit:function(){
      this.set('editMode', true);
    },
    addSystem:function(typ){
      var systems = this.get('frame.systems').slice(0);
      systems.push(typ);
      this.get('frame').set('systems', systems);
    },
    removeSystem:function(typ){
      var systems = this.get('frame.systems').slice(0);
      var i = systems.indexOf(typ);
      if(i > -1){
        systems.splice(i, 1)
        this.get('frame').set('systems', systems);
      }
    },
    cancel:function(){
      this.get('frame').rollback();
      this.set('editMode', false);
      this.notifications.addNotification({
        message: 'Edit Canceled',
        type: 'info',
        autoClear: true
      })
    },
    save:function(){
      var thisComponent = this;
      this.get('frame').save().then(function(){
        thisComponent.notifications.addNotification({
          message: 'Saved Frame',
          type: 'success',
          autoClear: true
        });
        thisComponent.set('editMode', false);
      });
    }
  }
});
