
$(document).ready(function(){
   // your on click function here
    $('.topnav a').click(function(){
        $('#content-page').load($(this).attr('href'));
        return false;
    }) ;
 
  
});
