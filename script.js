import { Octokit } from "octokit";
window.alert("test");

const octokit = new Octokit({ });

var cards = document.getElementsByClassName("github-card");
for (var i=0; i > cards.length; i++){
  user= cards[i].getAttribute("data-user");
  cards[i].innerHTML="<b>hey"+"</b>";
}


