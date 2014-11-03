/* Formatting function for row details - modify as you need */
function createScheduleTable ( data ) {
    // `d` is the original data object for the row
    return '<div class="table-responsive child-row-schedule-div">'+
          '<table id="schedule-data-table" class="table table-bordered table-compact table-striped hover-transparent" cellspacing="0" width="100%">'+
            '<thead>'+
              '<th>Schedule</th>'+
              '<th>Open</th>'+
              '<th>Close</th>'+
            '</thead>'+
            '<tbody>'+
              '<tr>'+
                  '<td>Monday</td>'+
                  '<td>' + data.schedule.mon_open + '</td>'+
                  '<td>' + data.schedule.mon_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Tuesday</td>'+
                  '<td>' + data.schedule.tue_open + '</td>'+
                  '<td>' + data.schedule.tue_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Wednesday</td>'+
                  '<td>' + data.schedule.wed_open + '</td>'+
                  '<td>' + data.schedule.wed_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Thursday</td>'+
                  '<td>' + data.schedule.thu_open + '</td>'+
                  '<td>' + data.schedule.thu_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Friday</td>'+
                  '<td>' + data.schedule.fri_open + '</td>'+
                  '<td>' + data.schedule.fri_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Saturday</td>'+
                  '<td>' + data.schedule.sat_open + '</td>'+
                  '<td>' + data.schedule.sat_close + '</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Sunday</td>'+
                  '<td>' + data.schedule.sun_open + '</td>'+
                  '<td>' + data.schedule.sun_close + '</td>'+
              '</tr>'+
            '</tbody>'+
          '</table>'+
        '</div>'+
        '<div class="child-row-googlemaps-div">'+
          '<h3>'+
            '<img src="assets/google-map-image.jpg" class="img-responsive placeholder" alt="google map image">'+
          '</h3>'+
        '</div>';



    // return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
    //     '<tr>'+
    //         '<td>Full name:</td>'+
    //         '<td>'+d.name+'</td>'+
    //     '</tr>'+
    //     '<tr>'+
    //         '<td>Extension number:</td>'+
    //         '<td>'+d.extn+'</td>'+
    //     '</tr>'+
    //     '<tr>'+
    //         '<td>Extra info:</td>'+
    //         '<td>And any further details here (images etc)...</td>'+
    //     '</tr>'+
    // '</table>';
}

$(document).ready(function() {

  // console.log("dReady BEFORE datatables!");

  var table = $('#index-data-table').DataTable( {
    // ajax: ...,
    // processing: true,
    // serverSide: true,

    destroy: true, //re-initialize datatable
    "scrollY": "", // defulat value is 500px
    "scrollCollapse": true,
    "paging": true, // set paging to false if scrolling
    "sPaginationType": "bootstrap", //boostrap pagination
    "pagingType": "full_numbers", // Optional, if you want full pagination controls.
    "order": [[ 1, "asc"],[3,"asc"]], // order by district then branch columns
    "iDisplayLength": 50, // default show # entries
    "bAutoWidth": true, // set autowidth to true
    "columns": [
      { "autoWidth": true }, // dropdown icon
      { "autoWidth": true }, // Brand
      { "autoWidth": true }, // District
      { "autoWidth": true }, // Territory
      { "autoWidth": true }, // Branch
      { "autoWidth": true }, // Address
      { "autoWidth": true }, // Phone
      { "autoWidth": true }, // Free trial
      // { "autowidth": true }, // Unique feature
    ]
  } );

  // console.log("dReady AFTER datatables!");

  // Add event listener for opening and closing details
  $('#index-data-table tbody').on( 'click', 'tr', function () {

    var tr = $(this).closest('tr');
    var row = table.row( tr );

    if ( row.child.isShown() ) {
      // This clicked row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    }
    else {
      // Get gym-id from .data element of HTML tr
      var gymId = $(tr).data('gym-id');
      // Fetch JSON datat of this gymId
      $.get('/gyms/' + gymId + '.json').done(function(data) {

        // Open this clicked row, run data into format function
        row.child( createScheduleTable(data) ).show();
        row.child().addClass("hover-transparent"); // Remove hover effrowect of tr behind schedule-data-table
        tr.addClass('shown');

        $('#schedule-data-table').DataTable( {
          destroy: true, //re-initialize datatable
          "bFilter": false, // remove search field
          "bSort" : false, // remove column sorting
          "sDom": '<"top">rt<"bottom"flp><"clear">', // remove 'Showing X of XX entries'
          "paging": false, // set paging to false if scrolling
          "bAutoWidth": true, // set autowidth to true
          "columns": [
            { "autoWidth": true }, // day
            { "autoWidth": true }, // open
            { "autoWidth": true }, // close
          ]
        } );

      });
    }

    // console.log("Table row clicked");

    // Add event listener for highlighting row
    if ( $(this).hasClass('selected') ) {
      $(this).removeClass('selected');
      // console.log("row highlight OFF");
    }
    else {
      table.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
      // console.log("row highlight ON");

      $(this).closest("span").hide();
      // $(this).closest("td.plus-icon").append("<span class='glyphicon glyphicon-minus'></span>");
    }
  } );

} );