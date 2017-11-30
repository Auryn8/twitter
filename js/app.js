var button = document.getElementById('button');
button.addEventListener("click",sendTweet);

function sendTweet() {
  var tweet = document.getElementById('writer').value;
  var user = document.getElementById('user').value;
  var timeline = document.getElementById('tweet'); 

  timeline.innerHTML = tweet + "  " + "User: " + user;
  timeline.appendChild(tweet);

}
