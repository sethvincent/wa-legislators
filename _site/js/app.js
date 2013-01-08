$(document).ready(function(){
  
  var items = [];
  var template = _.template( $('#legislator-template').html() );
  
  $(".legislators").on('mouseleave', function(){
    $(this).children(".legislators-detail").hide();
  });
  
  $.getJSON('wa-legislators.json', function(data){
    var legislators = data['rows'];
    
    $.each(legislators, function(key, legislator){
      items.push( template(legislator) );
    });
    
    $('<div/>', {
      'class': 'legislators',
      html: items.join('')
    }).appendTo('.container');
  });
});