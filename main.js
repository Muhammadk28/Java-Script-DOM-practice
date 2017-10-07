var string = document.querySelector("#hello");
var friends = ["sumon", "sarwar", "tanim", "tofael"]
var friend = "<h1>Friend list</h1>";
for ( i = 0 ; i < friends.length; i++) {
    friend = friend + "<li>" + friends[i] + "</li>";
}
string.innerHTML = friend;
string.style.color = 'green';



//dom style
var array  = document.querySelector("nav ul");
array.style.listStyle = "none";
array.style.backgroundColor = "cornflowerblue";


var lista = document.querySelectorAll("nav ul li");
lista[0].style.cssFloat = "left";
lista[1].style.cssFloat = "left";
lista[2].style.cssFloat = "left";
lista[2].style.borderRight = "1px solid black";
lista[1].style.borderRight = "1px solid black";
lista[0].style.borderRight = "1px solid black";

var deco = document.querySelectorAll("nav ul li a");
deco[0].style.textDecoration = "none";
deco[1].style.textDecoration = "none";
deco[2].style.textDecoration = "none";
deco[3].style.textDecoration = "none";
deco[0].style.color = "skyblue";
deco[1].style.color = "skyblue";
deco[2].style.color = "skyblue";
deco[3].style.color = "skyblue";
deco[0].style.fontSize = "20px";
deco[1].style.fontSize = "20px";
deco[2].style.fontSize = "20px";
deco[3].style.fontSize = "20px";
deco[0].style.padding = "20px";
deco[1].style.padding = "20px";
deco[2].style.padding = "20px";
deco[3].style.padding = "20px";

var kayes = document.querySelectorAll(".kayes");
kayes[0].style.width = "300px";
kayes[0].style.height = "100px";
kayes[0].style.backgroundColor = "red";
kayes[1].style.width = "300px";
kayes[1].style.height = "100px";
kayes[1].style.backgroundColor = "yellow";
kayes[1].style.margin = "50px 0";
kayes[2].style.width = "300px";
kayes[2].style.height = "100px";
kayes[2].style.backgroundColor = "green";


