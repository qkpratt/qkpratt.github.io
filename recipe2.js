var r = document.querySelector(':root');

var dm = false;
var ad = true;
function togglead(t){
    add=t
    if (ad==true){
        ad=false;
        r.style.setProperty('--adleft', '-100%');

    }
    if (ad==false){
        ad=true;
        r.style.setProperty('--adleft', '5%');
        r.style.setProperty('--leftpadding', '30%');
        r.style.setProperty('--rightpadding', '10%');

    }
}




function darkmode(ans) {
    if (ans == true){
        r.style.setProperty('--bg', '#0a0a0a');
        r.style.setProperty('--txt', 'white');
        r.style.setProperty('--grey', '#a0a0a0');
        r.style.setProperty('--grey2', '#1f1f1f');
        r.style.setProperty('--blue', 'orange');
        r.style.setProperty('--buttonblue', 'orange');
        document.getElementById('dmbutttxt').textContent = "Light Mode";
        document.getElementById('dmbutt').setAttribute("onClick", "darkmode(false)");


    }
    else{
        r.style.setProperty('--bg', 'white');
        r.style.setProperty('--txt', 'black');
        r.style.setProperty('--grey', 'grey');
        r.style.setProperty('--grey2', 'lightgrey');
        r.style.setProperty('--blue', 'blue');
        r.style.setProperty('--buttonblue', '#00a0ff');

        document.getElementById('dmbutttxt').textContent = "Dark Mode";
        document.getElementById('dmbutt').setAttribute("onClick", "darkmode(true)");

    }
    dm=ans;
}



