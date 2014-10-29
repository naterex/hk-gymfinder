/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<div class="table-responsive">'+
      '<table id="schedule-data-table" class="display compact hover order-column" cellspacing="0" width="50%">'+
        '<thead>'+
          '<th></th>'+
          '<th>Open</th>'+
          '<th>Close</th>'+
        '</thead>'+
        '<tbody>'+
          '<tr>'+
              '<td>Monday</td>'+
              '<td>8am</td>'+
              '<td>10pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Tuesday</td>'+
              '<td>8am</td>'+
              '<td>10pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Wednesday</td>'+
              '<td>8am</td>'+
              '<td>10pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Thursday</td>'+
              '<td>8am</td>'+
              '<td>10pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Friday</td>'+
              '<td>8am</td>'+
              '<td>10pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Saturday</td>'+
              '<td>9am</td>'+
              '<td>8pm</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Sunday</td>'+
              '<td>10am</td>'+
              '<td>8pm</td>'+
          '</tr>'+
        '</tbody>'+
      '</table>'+
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
    autoWidth: true,
    "sPaginationType": "bootstrap", //boostrap pagination
    "pagingType": "full_numbers", // Optional, if you want full pagination controls.
    "order": [[ 3, "asc"],[2,"asc"]], //district then branchcolum order
    "iDisplayLength": 50, // default show # entries
    "columns": [
      { "autowidth": true }, // dropdown icon
      { "autowidth": true }, // Brand
      { "autowidth": true }, // Branch
      { "autowidth": true }, // District
      { "autowidth": true }, // Territory
      { "autowidth": true }, // Address
      { "autowidth": true }, // Phone
      { "autowidth": true }, // Free trial
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
      // Open this clicked row
      row.child( format(row.data()) ).show();
      tr.addClass('shown');
    }

    // console.log("Table row clicked");

    // Add event listener for highlighting row
    if ( $(this).hasClass('selected') ) {
      $(this).removeClass('selected');
      console.log("row highlight OFF");
    }
    else {
      table.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
      console.log("row highlight ON");
      // $(this).closest("span").remove();
      // $(this).closest("td.plus-icon").append("<span class='glyphicon glyphicon-minus'></span>");
    }
  } );

} );