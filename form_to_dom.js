//Event Listener for id btn
document.getElementById("btn").addEventListener("click", postText);


function postText() {
  //Receive value from textbox id user
  let postVal = document.getElementById("user").value'

  //post on <p> id post
  document.getElementById("post").innerHTML = postVal;
}
