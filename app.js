document.querySelector("#app").innerHTML = "Loading...";

var root = 'https://jsonplaceholder.typicode.com';
$.ajax({
  url: root + '/photos/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
  var photos = data;
  document.querySelector("#app").innerHTML = photos.title;
  document.querySelector("#app").innerHTML += "<img src='"+photos.thumbnailUrl+"' />";

});
