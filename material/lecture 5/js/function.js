function sayHi() {
  // get name
  var name = document.getElementById("name").value;

  // set message
  var message = "<p>Hi! " + name + "</p>";

  // update on HTML
  document.getElementById("content").innerHTML = message;

  var title = document.querySelector("#title").textContent;
  document.querySelector("#title").textContent = title + " to " + name;

  // update on HTML
  if (name === "Donald Trump") {
    document.getElementById("content").innerHTML = "You must be kidding me.";
  }
}
