Template.flightEdit.events({
    
  'submit form': function(e) {
    e.preventDefault();

    var currentFlightId = this._id;

    var flightProperties = {
      flt_date: $(e.target).find('[name=flt_date]').val(),
      from: $(e.target).find('[name=from]').val(),
      to: $(e.target).find('[name=to]').val(),
      dep_time: $(e.target).find('[name=dep_time]').val(),
      arr_time: $(e.target).find('[name=arr_time]').val(),
      duration: $(e.target).find('[name=duration]').val(),
      instr_time: $(e.target).find('[name=instr_time]').val(),
      night_time: $(e.target).find('[name=night_time]').val(),
      remarks: $(e.target).find('[name=remarks]').val(),
    }

    Flights.update(currentFlightId, {$set: flightProperties},
    function(error){
      if (error) {
        alert(error.reason);
        }
      else {
          // Router.go('flightPage', {_id:currentFlightId});
          Router.go('flightsList');
        }
    });
  },


  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this flight?")){
      var currentFlightId = this._id;
      Flights.remove(currentFlightId);
      Router.go('flightsList');
    }
  }

});
