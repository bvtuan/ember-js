Tuan = Ember.Application.create();

Tuan.work =  Em.Object.extend({
    title   : null,
    isDone  : false
});

Tuan.mainController  = Em.ArrayProxy.create({
  content: [] ,
  createWork : function ( title ){
      var obj =  Tuan.work.create({ title : title })
      this.pushObject(obj);   
  },
  remaining: function() {
    return this.filterProperty('isDone', false).get('length');
  }.property('@each.isDone')
  
});


Tuan.textBox = Em.TextField.extend({
  
  insertNewline : function(){
      var value = this.get('value');
      if ( value  ){
            Tuan.mainController.set('textValue',value);
            Tuan.mainController.createWork ( value );
            this.set('value','');
            Tuan.TypingValue.tam = 'hay day';
      }
  }
})

Tuan.TypingValue  =  Em.View.extend({
   typingBinding : "Tuan.mainController.textValue",
   typingString  : function(){
       return this.get('typing');
   }.property('typing'),
   
   peopleBinding : "Tuan.mainController.content",
   remainBinding : "Tuan.mainController.remaining"
   
}) 