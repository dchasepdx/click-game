var count = 0
var clicks = 1
var cost = 30
$('#click').click(function() {
  count += clicks;
  $('.count').text(count.toString());
});


$('#dblclick').click(function() {
  if(count >= cost) {
    count -= cost;
    clicks = clicks * 2;
    $('.count').text(count.toString());
    $('.cost').text((cost*2).toString());
    cost *= 2
  }
  else {
  return false;
}
});
