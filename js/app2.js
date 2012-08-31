
/*
var tom = People.create({
	firstname 	: "tom",
	lastname	: "sussan"
});

tom.say();
*/

/* Setter and getter

Person = Ember.Object.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,
  fullName: function(key, value) {
    // getter
    if (arguments.length === 1) {
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      return firstName + ' ' + lastName;
    // setter
    } else {
      var name = value.split(" ");
      this.set('firstName', name[0]);
      this.set('lastName', name[1]);
      return value;
    }
  }.property('firstName', 'lastName')
});

var person = Person.create();
person.set('fullName', "Peter Wagenet");
alert(person.get('firstName')); // Peter
alert(person.get('lastName')); // Wagenet

*/

/*
Person = Ember.Object.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,
  fullName: function() {
    var firstName = this.get('firstName');
    var lastName = this.get('lastName');
    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName')
});
var person = Person.create({
  firstName: "Yehuda",
  lastName: "Katz"
});

// Trigger when fullname is changed
person.addObserver('fullName', function() {
  // deal with the change
 
});
person.set('firstName', "Brohuda"); // observer will fire

*/

/*

App.todosController = Ember.Object.create({
  todos: [
    Ember.Object.create({ isDone: false })
  ],
  remaining: function() {
    var todos = this.get('todos');
    return todos.filterProperty('isDone', false).get('length');
  }.property('todos.@each.isDone')
});


var todos = App.todosController.get('todos');
var todo = todos.objectAt(0);
todo.set('isDone', true);
App.todosController.get('remaining');
// 0
todo = Ember.Object.create({ isDone: false });
todos.pushObject(todo);
App.todosController.get('remaining');
*/

/*
App.wife = Ember.Object.create({
  householdIncome: 80000
});
App.husband = Ember.Object.create({
  householdIncomeBinding: 'App.wife.householdIncome'
});
App.husband.get('householdIncome'); // 80000
// Someone gets raise.
App.husband.set('householdIncome', 90000);
App.wife.get('householdIncome'); // 90000
*/