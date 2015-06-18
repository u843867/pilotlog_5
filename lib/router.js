Router.configure({


  //for all routes use the layout template
  //to determine the layout we want to use
  layoutTemplate:'layout',
  //next - for any route subscribe to the Flights
  //subscription.


  //use loadingTemplate to show this template whilst
  // the app gets the data neccesary.

  loadingTemplate: 'loading',

  notFoundTemplate:'notFound',

  waitOn: function() {
    return Meteor.subscribe('flights');
  }

});

Router.route('/', {name:'flightsList'});

Router.route('flight/:_id', {name:'flightPage',
data: function() { return Flights.findOne(this.params._id); }
});

Router.route('submit',{name:'flightSubmit'});

Router.route('/flights/:_id/edit', {
  name: 'flightEdit',
  data: function() {
    return Flights.findOne( this.params._id);
    Session.set('mode', 'edit');
  }
});




Router.onBeforeAction('dataNotFound', {only: 'flightPage'});
