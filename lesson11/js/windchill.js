let temp = parseFloat(document.querySelector('#temp').innerText);
let speed = parseFloat(document.querySelector('#speed').innerText);


let answer =parseInt( 35.74 + 0.6215*temp - 35.75*Math.pow(speed,0.16) + 0.4275*temp*Math.pow(speed,0.16));

if(temp<=50 && speed>3){
    document.getElementById('windchill').innerHTML =answer;
    
}

else{ 
    document.getElementById('windchill').innerHTML = "N/A";
    
}




