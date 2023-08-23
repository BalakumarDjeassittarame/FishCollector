var points = 0;
var bubulle = 0;
var bonus1 = 0;
var bonus2 = 0;
var bonus3 = 0;

var prix1 = 100;
var prix2 = 100;
var prix3 = 10000;

var intervalb2 = 1000;
var intervalb3 = 1000;

var affichage = document.getElementById('points')
affichage.innerHTML = points;



function  Ongletsucces(){
    var position1 = document.getElementById('position1')
    var position2 = document.getElementById('position2')
    var position3 = document.getElementById('position3')
    document.getElementById('Succes').style.backgroundColor = '#0877b6';
    document.getElementById('Succes').style.color = '#c9f0f8';
    document.getElementById('boutique').style.backgroundColor = '#c9f0f8';
    document.getElementById('boutique').style.color = '#0877b6';
    document.getElementById('boutique').style.cursor = 'pointer';
    document.getElementById('Succes').style.cursor = 'default';

    //succes1
    if(points>=9){
        position1.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/pirate.png" alt=""><p class="tobjet">Atteignez 10 points</p></div>';
    }
    else{
        position1.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/pirate.png" alt=""><p class="tobjet">Atteignez 10 points</p></div>';
    }

    //succes2
    if(points>=999){
        position2.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/perle.png" alt=""><p class="tobjet">Atteignez 1 000 points</p></div>';
    }else{
        position2.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/perle.png" alt=""><p class="tobjet">Atteignez 1 000 points</p></div>';        
    }
    
    //succes3
    if(points>=99999){
        position3.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/tresor.png" alt=""><p class="tobjet">Atteignez 100 000 points</p></div>';
    }else{
        position3.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/tresor.png" alt=""><p class="tobjet">Atteignez 100 000 points</p></div>';
    }
}

function  Ongletboutique(){
    var position1 = document.getElementById('position1')
    var position2 = document.getElementById('position2')
    var position3 = document.getElementById('position3')
    document.getElementById('boutique').style.backgroundColor = '#0877b6';
    document.getElementById('boutique').style.color = '#c9f0f8';
    document.getElementById('Succes').style.backgroundColor = '#c9f0f8';
    document.getElementById('Succes').style.color = '#0877b6';
    document.getElementById('Succes').style.cursor = 'pointer';
    document.getElementById('boutique').style.cursor = 'default';

    if(points>prix1){
        position1.innerHTML = '<div class="objet" onclick="Bonus1()"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
    }else{
        position1.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
    }
    
    if(points>prix2){
        position2.innerHTML = '<div class="objet" onclick="Bonus2()"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
    }else{
        position2.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
    }

    if(points>prix3){
        position3.innerHTML = '<div class="objet" onclick="Bonus3()"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
    }else{
        position3.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
    }

}

//document.onmousemove = suit_souris;
//function suit_souris(evenement){
//var x =  evenement.pageX;
//var y =  evenement.pageY;

//document.getElementById("Bulle").style.left = (x+1)+'px';
//document.getElementById("Bulle").style.top  = (y+1)+'px';
//}


function Click(){

//Comptage points
Math.round(points+=1+bonus1+bonus3);
affichage.innerHTML = Math.round(points);

//Succès
if(points==10){
    position1.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/pirate.png" alt=""><p class="tobjet">Atteignez 10 points</p></div>';
    document.getElementById('Succes').style.backgroundColor = '#0877b6';
    document.getElementById('Succes').style.color = '#c9f0f8';
    document.getElementById('boutique').style.backgroundColor = '#c9f0f8';
    document.getElementById('boutique').style.color = '#0877b6';
    document.getElementById('boutique').style.cursor = 'pointer';
    document.getElementById('Succes').style.cursor = 'default';
}

if(points>=1000){
    position2.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/perle.png" alt=""><p class="tobjet">Atteignez 1 000 points</p></div>';
    document.getElementById('Succes').style.backgroundColor = '#0877b6';
    document.getElementById('Succes').style.color = '#c9f0f8';
    document.getElementById('boutique').style.backgroundColor = '#c9f0f8';
    document.getElementById('boutique').style.color = '#0877b6';
    document.getElementById('boutique').style.cursor = 'pointer';
    document.getElementById('Succes').style.cursor = 'default';
}

if(points>=100000){
    position3.innerHTML = '<div class="succesvalid"><img class="imgobjet" src="Images/tresor.png" alt=""><p class="tobjet">Atteignez 100 000 points</p></div>';
    document.getElementById('Succes').style.backgroundColor = '#0877b6';
    document.getElementById('Succes').style.color = '#c9f0f8';
    document.getElementById('boutique').style.backgroundColor = '#c9f0f8';
    document.getElementById('boutique').style.color = '#0877b6';
    document.getElementById('boutique').style.cursor = 'pointer';
    document.getElementById('Succes').style.cursor = 'default';
}

//Boutique
if(points>=prix1){
    position1.innerHTML = '<div class="objet" onclick="Bonus1()"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
    document.getElementById('boutique').style.backgroundColor = '#0877b6';
    document.getElementById('boutique').style.color = '#c9f0f8';
    document.getElementById('Succes').style.backgroundColor = '#c9f0f8';
    document.getElementById('Succes').style.color = '#0877b6';
    document.getElementById('Succes').style.cursor = 'pointer';
    document.getElementById('boutique').style.cursor = 'default';
}

if(points>=prix2){
    position2.innerHTML = '<div class="objet" onclick="Bonus2()"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
    document.getElementById('boutique').style.backgroundColor = '#0877b6';
    document.getElementById('boutique').style.color = '#c9f0f8';
    document.getElementById('Succes').style.backgroundColor = '#c9f0f8';
    document.getElementById('Succes').style.color = '#0877b6';
    document.getElementById('Succes').style.cursor = 'pointer';
    document.getElementById('boutique').style.cursor = 'default';
}

if(points>=prix3){
    position3.innerHTML = '<div class="objet" onclick="Bonus3()"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
    document.getElementById('boutique').style.backgroundColor = '#0877b6';
    document.getElementById('boutique').style.color = '#c9f0f8';
    document.getElementById('Succes').style.backgroundColor = '#c9f0f8';
    document.getElementById('Succes').style.color = '#0877b6';
    document.getElementById('Succes').style.cursor = 'pointer';
    document.getElementById('boutique').style.cursor = 'default';
}


//Affichage bulle au clic
    switch(bubulle){
        case 0:
            var bulle = document.getElementById('bubulle');
            bulle.innerHTML = '<img id="Bulle" src="Images/bulle.png">';
            bubulle++
            break
            
             case 1:
                var bulle2 = document.getElementById('bubulle2');
                bulle2.innerHTML = '<img id="Bulle2" src="Images/bulle.png">';
                bubulle++
                break

                case 2:
                    var bulle3 = document.getElementById('bubulle3');
                    bulle3.innerHTML = '<img id="Bulle3" src="Images/bulle.png">';
                    bubulle++
                    break

                    case 3:
                        var bulle4 = document.getElementById('bubulle4');
                        bulle4.innerHTML = '<img id="Bulle4" src="Images/bulle.png">';
                        bubulle++
                        break

                        case 4:
                            var bulle5 = document.getElementById('bubulle5');
                            bulle5.innerHTML = '<img id="Bulle5" src="Images/bulle.png">';
                            bubulle++
                            break

                            case 5:
                                var bulle6 = document.getElementById('bubulle6');
                                bulle6.innerHTML = '<img id="Bulle6" src="Images/bulle.png">';    
                                bubulle++
                                break

                case 6:
                    var bulle7 = document.getElementById('bubulle7');
                    bulle7.innerHTML = '<img id="Bulle7" src="Images/bulle.png">'; 
                    bubulle=0
                    break
                }

//Changement fond

}

function Bonus1(){
    
    bonus1+=10
    Math.round(points-=prix1)
    prix1*=1.5
    affichage.innerHTML = Math.round(points);
    var fond = document.getElementById('changefond');
        fond.innerHTML += '<img id="fond1" src="Images/Fond_ocean_orange.jpg" alt="">';


    if(points>prix1){
        position1.innerHTML = '<div class="objet" onclick="Bonus1()"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
    }else{
        position1.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
    }
}

function Bonus2(){

    bonus2 += 10;
    Math.round(points-=prix2)
    prix2*=1.5
    var fond = document.getElementById('changefond');
        fond.innerHTML += '<img id="fond1" src="Images/Fond_ocean_orange.jpg" alt="">';

    if(points>prix2){
        position2.innerHTML = '<div class="objet" onclick="Bonus2()"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
    } else {
        position2.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
    }


    setInterval(function(Bonus2) {
        points += bonus2;
        intervalb2 += 1000;
        affichage.innerHTML = Math.round(points);
        switch(bubulle){
            case 0:
                var bulle = document.getElementById('bubulle');
                bulle.innerHTML = '<img id="Bulle" src="Images/bulle.png">';
                bubulle++
                break
                
                 case 1:
                    var bulle2 = document.getElementById('bubulle2');
                    bulle2.innerHTML = '<img id="Bulle2" src="Images/bulle.png">';
                    bubulle++
                    break
    
                    case 2:
                        var bulle3 = document.getElementById('bubulle3');
                        bulle3.innerHTML = '<img id="Bulle3" src="Images/bulle.png">';
                        bubulle++
                        break
    
                    case 3:
                        var bulle7 = document.getElementById('bubulle7');
                        bulle7.innerHTML = '<img id="Bulle7" src="Images/bulle.png">'; 
                        bubulle=0
                        break
                    }
        if(points>prix1){
            position1.innerHTML = '<div class="objet" onclick="Bonus1()"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
        }else{
            position1.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus1.png" alt=""><p class="tobjet">Chips de tetard</p></div>';
        }
        if(points>prix2){
            position2.innerHTML = '<div class="objet" onclick="Bonus2()"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
        } else {
            position2.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus2.png" alt=""><p class="tobjet">Algues sèches</p></div>';
        }
        if(points>prix3){
            position3.innerHTML = '<div class="objet" onclick="Bonus3()"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
        }else{
            position3.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
        }
     }, intervalb2)
}



function Bonus3(){
    
    bonus3+=1000
    Math.round(points-=prix3)
    prix3*=3
    affichage.innerHTML = Math.round(points);


    if(points>prix3){
        position3.innerHTML = '<div class="objet" onclick="Bonus3()"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
    }else{
        position3.innerHTML = '<div class="objetverr"><img class="imgobjet" src="Images/bonus3.png" alt=""><p class="tobjet">Chips de dent de requin</p></div>';
    }
    setInterval(function(Bonus3) {
        points += bonus3;
        intervalb3 += 1000;
        affichage.innerHTML = Math.round(points);
        switch(bubulle){
            case 0:
                var bulle4 = document.getElementById('bubulle4');
                bulle4.innerHTML = '<img id="Bulle4" src="Images/bulle.png">';
                bubulle++
                break
            
                case 1:
                    var bulle5 = document.getElementById('bubulle5');
                    bulle5.innerHTML = '<img id="Bulle5" src="Images/bulle.png">';
                    bubulle++
                    break
            
                    case 2:
                        var bulle6 = document.getElementById('bubulle6');
                        bulle6.innerHTML = '<img id="Bulle6" src="Images/bulle.png">';    
                        bubulle++
                        break
    
                    case 3:
                        var bulle7 = document.getElementById('bubulle7');
                        bulle7.innerHTML = '<img id="Bulle7" src="Images/bulle.png">'; 
                        bubulle=0
                        break
                    }
     }, intervalb3)
}

function Skin1() {
    document.getElementById("Poisson").style.display= "inline" ;
    document.getElementById("Poisson2").style.display= "none";
}

function Skiin2() {
    document.getElementById("Poisson2").style.display= "inline" ;
    document.getElementById("Poisson").style.display= "none";
}


console.log(sessionStorage.getItem("Pseudo"));

function Save(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = envoidonnee;
    httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    var donnee = JSON.stringify({"username":sessionStorage.getItem("Pseudo"), "score": points, "force":true});
    httpRequest.send(donnee);
    }
    
function envoidonnee(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
    console.log("Le score a bien été enregistré") ;  
        } else {
                alert('Il y a eu une erreur avec la requete');
                    }    
                }
}

function lancement(){
    setInterval(() => { 
        Save();
    }, 60000); 

    setInterval(() => { 
        automatique();
    }, 1000); 

}

function automatique(){
    points++;
    affichage.innerHTML=points;
}
 