Template.flightsList.helpers({

//helper functions go below...
	flights: function() {

		return Flights.find({}, {sort: {flt_date: -1}});

  }

});
