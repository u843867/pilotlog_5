Template.flightSubmit.events({
      
  'submit form': function(e) {
    e.preventDefault();

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
    };

    flight._id = Flights.insert(flightProperties);
    Router.go('flightsList', flightProperties);

  }


});



Template.flightSubmit.onRendered(function() {

    $(".datetimepicker").datetimepicker({
        format: ('LT', 'HH:mm')
    });


    $('.datetimepicker4').datetimepicker({
        format: 'DD/MM/YYYY',
    });

    $("#dep_time").blur (function() {
      $("#arr_time").val ( $("#dep_time").val() );

      $("duration").val(  ($("#arr_time").val()) - ($("#dep_time").val())  );
      // alert( "Handler called." );
    });



    $("#arr_time").blur (function() {

      // use a constant date (e.g. 2000-01-01) and the desired time to initialize two dates
      var start = $("#dep_time").val();
      var startSplt = start.split(":");
      var startHr = startSplt[0];
      var startMin = startSplt[1];

      var end = $("#arr_time").val();
      var endSplt = end.split(":");
      var endHr = endSplt[0];
      // console.log(endHr);
      var endMin = endSplt[1];
      // console.log(endMin);


      var date1 = new Date(2000, 0, 1, startHr, startMin); // 9:00 AM
      var date2 = new Date(2000, 0, 1, endHr, endMin); // 5:00 PM
      // console.log(date2);
      // the following is to handle cases where the times are on the opposite side of
      // midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM

      if (date2 < date1) {
          date2.setDate(date2.getDate() + 1);
      }

      var diff = date2 - date1;

      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);

      if (mm < 10) {
        mm = '0' + mm;
      }

      var diff = hh + ":" + mm;

      $("#duration").val(diff);



    });


    $("#dep_time").blur (function() {

      // use a constant date (e.g. 2000-01-01) and the desired time to initialize two dates
      var start = $("#dep_time").val();
      var startSplt = start.split(":");
      var startHr = startSplt[0];
      var startMin = startSplt[1];

      var end = $("#arr_time").val();
      var endSplt = end.split(":");
      var endHr = endSplt[0];
      // console.log(endHr);
      var endMin = endSplt[1];
      // console.log(endMin);


      var date1 = new Date(2000, 0, 1, startHr, startMin); // 9:00 AM
      var date2 = new Date(2000, 0, 1, endHr, endMin); // 5:00 PM
      // console.log(date2);
      // the following is to handle cases where the times are on the opposite side of
      // midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM

      if (date2 < date1) {
          date2.setDate(date2.getDate() + 1);
      }

      var diff = date2 - date1;

      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);

      if (mm < 10) {
        mm = '0' + mm;
      }

      var diff = hh + ":" + mm;

      $("#duration").val(diff);



    });






});
