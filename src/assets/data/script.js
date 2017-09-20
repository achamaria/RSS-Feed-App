$(document).ready(function(){
  alert("hello");
  $('#target div a').each(function(){
    $(this).attr('target', '_blank');
  });
});
