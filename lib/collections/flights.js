Flights = new Mongo.Collection('Flights');

Flights.allow({
  insert: function(userId, doc){
    //only allow flight create if logged in
    return !! userId
  },
  remove: function(userId, doc){
    //only allow posting if logged insert
    return !! userId
  },
  update: function(userId, doc){
    //only allow posting if logged insert
    return !! userId
  }
});
