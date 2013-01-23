(function($) {
  
  Tabletop.init({ 
    key: '0AuwSoq4skLXjdHhjNFA1c3N4eW03dUVqSm5jTEN5alE',
    callback: function(data, tabletop) {
      
      var items = [];
      var template = _.template( $('#legislator-template').html() );
      var legislators = data;
      
      $.each(legislators, function(key, legislator){
        items.push( template(legislator) );
      });
      
      $('<div/>', {
        'class': 'legislators',
        html: items.join('')
      }).appendTo('.container');
      
      // handle popup of infobox
      $('.legislator').click(function(event){
        $('.legislator-details').not( $(this).children() ).hide();
        $(this).children('.legislator-details').show();
        event.stopPropagation();
      })
      
      $('.close').click(function(event){
        event.stopPropagation();
        
        $(this).parent().hide();
      });
      
      $('html').click(function(){
        $('.legislator-details').hide();
      });
      
      $('.loading').hide();
      
    },
    simpleSheet: true 
  });
})(jQuery);