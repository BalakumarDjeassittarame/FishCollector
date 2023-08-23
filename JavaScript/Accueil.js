var Pseudo;


function inscription(){
    Pseudo = document.getElementById("Start").value; 
    sessionStorage.setItem("Pseudo", Pseudo);
    alert('Votre pseudo pour cette partie est '+Pseudo+', bonne pêche !');
    var affichepseudo = document.getElementById('cachemisere')
    affichepseudo.innerHTML = '<section><h1> ' + Pseudo + '</h1></section>';


    }

function recuperer(){
    
}
    
 