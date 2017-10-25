var origin;
var originFull;
var countSearch;
var twoLetter;
var userName;
var userPhoto;


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
}).done(function(data){
  handleData(data);
});

var handleData = function(data){
  origin = (data.results[0].nat);
  userPhoto = (data.results[0].picture.large);
  userName = (data.results[0].name.first);
  JSON.stringify(origin);
  JSON.stringify(userName);
  $("#nationality").append(origin);
  $("#datDiv").prepend('<img src ="' + userPhoto + '"/>');
  $("#info").append(userName);

  var ur = 'https://restcountries.eu/rest/v2/alpha/'
  var countSearch = ur.concat(origin);

  $.ajax({
   url: countSearch,
   dataType: 'json',
  }).done(function(data){
    handleDataAgain(data);
  });


  var handleDataAgain = function(data){
    originFull = (data.name);
    JSON.stringify(originFull);
    $("#nationality").append(", " + originFull);
  }
}
