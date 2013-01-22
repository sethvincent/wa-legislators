$(document).ready(function(){
  
  var template = _.template( $('#legislator-template').html() );
  
  // get all the legislators and put them on the page
  var items = [];
  $.getJSON('wa-legislators.json', function(data){
    var legislators = data['rows'];
    
    $.each(legislators, function(key, legislator){
      items.push( template(legislator) );
    });
    
    $('<div/>', {
      'class': 'legislators',
      html: items.join('')
    }).appendTo('.container');
    
    // handle popup of infobox
    $('.legislator').click(function(event){
      event.stopPropagation();
      console.log("pizza");
      $('.legislator-details').not( $(this).children() ).hide();
      $(this).children('.legislator-details').show();
    })
    
    $('.close').click(function(event){
      event.stopPropagation();
      
      $(this).parent().hide();
    });
    
    $('html').click(function(){
      $('.legislator-details').hide();
    });
  });
});