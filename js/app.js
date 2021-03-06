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

 view.append();



var view = Ember.View.create({
  templateName: 'sayhello',
  person: Ember.Object.create({
    firstName: "Joy",
    lastName: "Clojure"
  })
});

view.append();





App.SayHelloView = Ember.View.extend({
  person: Ember.Object.create({
    firstName: "Tuan",
    lastName: "Bach Van"
  }),
  total :100,
  logoUrl: 'http://vnexpress.net/Files/Subject/3b/bd/b7/b9/Khoc-01.jpg',
   isDisabled: true,

   edit: function(event) {
    alert('ok');
    //event.view.set('isEditing', true);
  }

});






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



/*
App.UserView = Ember.View.extend({
  templateName: 'user',
  firstName: "Albert",
  lastName: "Hofmann",
  infoView: Ember.View.extend({
    templateName: 'info',
    posts: 25,
    hobbies: "Riding bicycles"
  })
});

*/

App.UserView = Ember.View.extend({
  templateName: 'user',
  firstName: "Albert",
  lastName: "Hofmann"
});
App.InfoView = Ember.View.extend({
  posts: 25,
  hobbies: "Riding bicycles"
});



App.userController = Ember.Object.create({
  content: Ember.Object.create({
    firstName: "Albert",
    lastName: "Hofmann",
    posts: 25,
    hobbies: "Riding bicycles"
  })
});


App.UserView1 = Ember.View.extend({
  
  firstNameBinding: 'App.userController.content.firstName',
  lastNameBinding: 'App.userController.content.lastName'
});