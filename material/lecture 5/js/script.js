$('#arg-btn').on('click', function(event) {
  var arg = document.getElementById("arg");
  arg.style.color = '#800080';
  arg.style.fontWeight = 700;
});

$('#res-btn').on('click', function(event) {
  var res = document.getElementById("res");
  res.style.color = '#007bff';
  res.style.fontWeight = 700;
});

$('#func-ans-btn').on('click', function(event) {
  var ans = document.createElement("p");
  var msg = document.createTextNode("All above are legal.");
  ans.appendChild(msg);
  ans.style.color = "#28a745";

  var funcAns = document.getElementById("func-ans");
  if (funcAns.childElementCount == 1)
    funcAns.appendChild(ans);
});

$('#scope-chain-q-btn').on('click', function(event) {
  var ans = document.createElement("p");
  var msg = document.createTextNode("Yes!");
  ans.appendChild(msg);
  ans.style.color = "#28a745";

  var ansDiv = document.getElementById("scope-chain-q-btn");
  if (ansDiv.childElementCount == 1)
    ansDiv.appendChild(ans);
});

$('#par1').on('click', function(event) {
  document.getElementById("par2").setAttribute("color","violet");
});

$('#val1').on('click', function(event) {
  document.getElementById("val2").setAttribute("color","orange");
});

$('#func-pass-a1').on('click', function(event) {
  var ansDiv = document.getElementById("func-pass-a1");
  ansDiv.innerHTML = "var a = 0;";
});

$('#func-pass-a2').on('click', function(event) {
  var ansDiv = document.getElementById("func-pass-a2");
  ansDiv.innerHTML = "a.x = 1;";
});

$('#dom-title-btn').on('click', function(event) {
  var div = document.getElementById("title");
  div.innerHTML = "Say Hi!";
});

$('#dom-name-btn').on('click', function(event) {
  var div = document.getElementById("name-div");
  div.innerHTML = "My name is ";

  var input = document.createElement("input");
  input.setAttribute("id","name");
  div.appendChild(input);

  var anotherInput = document.createElement("button");
  anotherInput.innerHTML = "Hi!";
  anotherInput.setAttribute("id","say-hi-btn");
  div.appendChild(anotherInput);
});

$('#dom-content-btn').on('click', function(event) {
  var div = document.getElementById("content");
  div.innerHTML = "";
});

$('#dom-get-title').on('click', function(event) {
  var div = document.getElementById("get-title");
  div.innerHTML = "Please try in console.";
  div.style.color = "green";
});

$('#dom-get-func').on('click', function(event) {
  var div = document.getElementById("get-func");
  div.innerHTML = "Please read function js carefully and try the button with your name and Donald Trump.";
  div.style.color = "green";

  document.getElementById("say-hi-btn").addEventListener("click", sayHi, false);
});

$('#event-page-btn').on('click', function(event) {
  window.open("https://developer.mozilla.org/en-US/docs/Web/API/Event", '_blank');
});

$('#dom-get-xy').on('click', function(event) {
  var div = document.getElementById("get-xy");
  div.style.color = "green";
  document.querySelector("body").addEventListener("mousemove",
  function (event) {
    div.innerHTML = "(" + event.clientX + ", " + event.clientY + ")";
  });
});
