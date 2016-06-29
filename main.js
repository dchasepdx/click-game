var count = 0
var clicks = 1
var cost = 30
var perSecondCost = 100;
$('#click').click(function() {
  count += clicks;
  $('.count').text(count.toString());
});


$('#dblclick').click(function() {
  if(count >= cost) {
    count -= cost;
    clicks = clicks * 2;
    $('.count').text(count.toString());
    $('.cost').text("500");
    cost = 500
  }
  else {
  return false;
}
});

$('#clickPerSecond').click(function() {
  if(count >= perSecondCost) {
    count -= cost;
    $('count').text(count.toString());
    setInterval(function() {
      count += 1;
    }, 1000);
  };

});
