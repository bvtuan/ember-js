var App = Ember.Application.create({   });

App.MyView = Ember.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});

var view = Ember.View.create({
  templateName: 'say-hello',
  name: "Bob"
});

App.CarView = Ember.View.extend({
  color: 'blue'
});

 view.append('#ember166');



Person = Ember.Object.extend({
  say: function(thing) {
    alert(thing);
 }
});
//var person = Person.create();
//person.say("Hello") // alerts "Hello"


var yehuda = Person.create({
  name: "Yehuda Katz",
  say: function(thing) {
    var name = this.get('name');
    this._super(name + " says: " + thing);
  }
});

//yehuda.say('lala');


// subclassing class
var LoudPerson = Person.extend({
  say: function(thing) {
    this._super(thing.toUpperCase());
  }
});


//var temp = new LoudPerson();
//temp.say('that Is Good');

// Reopen classe allow add new properties or add new function or override existing function
Person.reopen({
  isPerson: true,
  mthod: function(thing) {
  	alert(thing)
  }
});

 //Person.create().mthod('isPerson'); 

 Person.reopenClass({
  createMan: function() {
    return Person.create({isMan: true})
  }
});
//alert(Person.createMan().get('isMan') );// true

